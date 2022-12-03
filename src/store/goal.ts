import { get, writable } from 'svelte/store';
import { getCardById } from './helpers/getCardById';
import { getInitialEmptyCardMap } from './helpers/getInitialEmptyCardMap';

export const goal = writable(getInitialEmptyCardMap(4));
export const availableGoalColumn = writable<number | null>(null);
export const isAvailableToPlaceCardIntoGoal = writable(false);

export function addCardToGoal(column: number, cardId: string) {
    goal.update(state => {
        const newList = state.get(column);

        newList.push(getCardById(cardId));

        state.set(column, newList);

        return state;
    });
}

export function removeCardFromGoalColumn(id: string) {
    goal.update(state => {
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

export function setIsAvailableToPlaceCardIntoGoal(isAvailable: boolean) {
    isAvailableToPlaceCardIntoGoal.set(isAvailable);
}

export function resetIsAvailableToPlaceCardIntoGoal() {
    isAvailableToPlaceCardIntoGoal.set(false);
}

export function setAvailableGoalColumn(column: number) {
    availableGoalColumn.set(column);
}

export function resetAvailableGoalColumn() {
    availableGoalColumn.set(null);
}
