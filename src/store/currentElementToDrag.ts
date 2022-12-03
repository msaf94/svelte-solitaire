import { writable } from 'svelte/store';

type CardIds = string[];

export const currentElementToDrag = writable<CardIds | null>(null);

export function setCurrentElementToDrag(cards: CardIds) {
    currentElementToDrag.set(cards);
}

export function resetCurrentElementToDrag() {
    currentElementToDrag.set(null);
}
