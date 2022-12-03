import { writable } from 'svelte/store';

type CardIds = string[];

export const available = writable<CardIds>([]);

export function addAvailableCard(cardIdToAdd: string) {
    available.update(state => {
        state.push(cardIdToAdd);

        return state;
    });
}

export function clearAvailableCards() {
    available.set([]);
}

export function removeCardFromAvailableField(cardId: string) {
    available.update(state => {
        return state.filter(card => card !== cardId);
    });
}
