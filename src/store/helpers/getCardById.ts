import { initialCards } from './initialCards';

export function getCardById(id: string) {
    return initialCards.find(card => card.id === id);
}
