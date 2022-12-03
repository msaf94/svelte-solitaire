import { get } from 'svelte/store';
import { removeCardFromAvailableField } from './available';
import { cardDestination, resetCardDestination } from './cardDestination';
import { currentElementToDrag, resetCurrentElementToDrag } from './currentElementToDrag';
import {
    availableFieldColumn,
    isAvailableToPlaceCardIntoField,
    moveCardInsideField,
    removeCardFromFieldColumn,
    resetAvailableFieldColumn,
    resetIsAvailableToPlaceCardIntoField
} from './field';
import {
    addCardToGoal,
    availableGoalColumn,
    isAvailableToPlaceCardIntoGoal,
    removeCardFromGoalColumn,
    resetAvailableGoalColumn,
    resetIsAvailableToPlaceCardIntoGoal
} from './goal';
import type { getInitialEmptyCardMap } from './helpers/getInitialEmptyCardMap';
import { initialCards } from './helpers/initialCards';

export const mutableCards = [...initialCards];

export type Field = ReturnType<typeof getInitialEmptyCardMap>;

export function manageCardPlacement() {
    const cardIds = get(currentElementToDrag);
    const destination = get(cardDestination);

    if (destination === 'goal') {
        if (get(isAvailableToPlaceCardIntoGoal)) {
            cardIds.forEach(cardId => {
                removeCardFromAvailableField(cardId);
                removeCardFromFieldColumn(cardId);
                addCardToGoal(get(availableGoalColumn), cardId);
            });
        }
    }

    if (destination === 'field') {
        if (get(isAvailableToPlaceCardIntoField)) {
            cardIds.forEach(cardId => {
                removeCardFromAvailableField(cardId);
                removeCardFromGoalColumn(cardId);
                removeCardFromFieldColumn(cardId);
                moveCardInsideField(get(availableFieldColumn), cardId);
            });
        }
    }

    resetAvailableFieldColumn();
    resetIsAvailableToPlaceCardIntoField();
    resetAvailableGoalColumn();
    resetIsAvailableToPlaceCardIntoGoal();
    resetCurrentElementToDrag();
    resetCardDestination();
}
