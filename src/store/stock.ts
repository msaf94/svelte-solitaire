import { get, writable } from 'svelte/store';
import { mutableCards } from '.';

type CardIds = string[];

export const stock = writable<CardIds>([]);

export function initStockCards() {
    stock.set(mutableCards.map(card => card.id));
}

export function popStockCard() {
    let card: string;
    if (get(stock).length) {
        stock.update(state => {
            card = state.pop();
            return state;
        });
    }
    return card;
}

export function resetStock(cardIds: string[]) {
    stock.set(cardIds);
}
