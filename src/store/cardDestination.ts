import { writable } from 'svelte/store';

export type Destination = 'goal' | 'field';

export const cardDestination = writable<Destination | null>(null);

export function setCardDestination(destination: Destination) {
    cardDestination.set(destination);
}

export function resetCardDestination() {
    cardDestination.set(null);
}
