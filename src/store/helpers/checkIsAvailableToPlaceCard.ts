import { Rank, rankOrder } from '../../constants';
import type { Destination } from '../cardDestination';
import { getCardById } from './getCardById';

interface Parameters {
    whatToPlaceId: string;
    whereToPlaceId?: string;
    destination: Destination;
}

export function checkIsAvailableToPlaceCard({ whatToPlaceId, whereToPlaceId, destination }: Parameters) {
    const [whatToPlace, whereToPlace] = [whatToPlaceId, whereToPlaceId].map(cardId => getCardById(cardId));

    function getCardsIndexes() {
        return [whatToPlace.rank, whereToPlace.rank].map(rank => rankOrder.indexOf(rank));
    }

    if (whereToPlace === undefined) {
        if (destination === 'goal') {
            return whatToPlace.rank === Rank.ACE;
        }

        if (destination === 'field') {
            return whatToPlace.rank === Rank.KING;
        }

        return false;
    }

    if (destination === 'goal') {
        const [whatToPlaceIndex, whereToPlaceIndex] = getCardsIndexes();

        const isAvailableByColor = whereToPlace.color === whatToPlace.color;
        const isAvailableBySuit = whereToPlace.suit === whatToPlace.suit;
        const isAvailableByRank = whatToPlaceIndex - whereToPlaceIndex === 1;

        return isAvailableByColor && isAvailableByRank && isAvailableBySuit;
    }

    const [whatToPlaceIndex, whereToPlaceIndex] = getCardsIndexes();

    const isAvailableByRank = whereToPlaceIndex - whatToPlaceIndex === 1;
    const isAvailableByColor = whereToPlace.color !== whatToPlace.color;

    return isAvailableByRank && isAvailableByColor;
}
