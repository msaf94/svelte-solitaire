import { get, writable } from 'svelte/store';
import { mutableCards } from '.';
import type { CardProperties } from '../components/Card/types';
import { getCardById } from './helpers/getCardById';
import { getInitialEmptyCardMap } from './helpers/getInitialEmptyCardMap';

export const field = writable(getInitialEmptyCardMap(7));
export const availableFieldColumn = writable<number | null>(null);
export const isAvailableToPlaceCardIntoField = writable(false);

export function setIsAvailableToPlaceCardIntoField(isAvailable: boolean) {
    isAvailableToPlaceCardIntoField.set(isAvailable);
}

export function resetIsAvailableToPlaceCardIntoField() {
    isAvailableToPlaceCardIntoField.set(false);
}

export function setAvailableFieldColumn(column: number) {
    availableFieldColumn.set(column);
}

export function resetAvailableFieldColumn() {
    availableFieldColumn.set(null);
}

export function initFieldCards() {
    const map = new Map<number, CardProperties[]>();

    for (let index = 0; index < 7; index++) {
        map.set(index, mutableCards.splice(0, index + 1));
    }

    [...map.entries()].forEach(([_, cards]) => {
        cards[cards.length - 1].isOpen = true;
    });

    field.set(map);

}



export function removeCardFromFieldColumn(id: string) {
    field.update(state => {
        const fieldStats = [...state.entries()].find(([_, cards]) => {
            const foundCard = cards.find(card => card.id === id);

            return foundCard;
        });

        if (fieldStats) {
            const [column, cardList] = fieldStats
            state.set(
                column,
                cardList.filter(card => card.id !== id)
            );
        }

        return state;
    });
}

export function getCardIdsBelowSelected(column: number, cardId: string) {
    const cards = get(field).get(column);

    const indexOfSelectedCard = cards.findIndex(card => card.id === cardId);

    return cards.slice(indexOfSelectedCard);
}

export function moveCardInsideField(column: number, cardId: string) {
    field.update(state => {
        state.get(column).push(getCardById(cardId));

        return state;
    });
}

field.subscribe(state => {
    for (let column = 0; column < state.size; column++) {
        if (state.get(column).length) {
            const lastCard = state.get(column).at(-1);

            if (!lastCard.isOpen) lastCard.isOpen = true;
        }
    }

    return state;
});
