import type { CardProperties } from '../../components/Card/types';
import { ColorMap, Rank, Suit } from '../../constants';

function getRandomNumber(from = 0, to: number) {
    return Math.round(Math.random() * (from + (to - from)));
}

function shuffleList(list: CardProperties[]) {
    const usedIndexList = [];
    const shuffledList: typeof list = [];

    list.forEach((_, index) => {
        let randomIndex: null | number = null;

        while (randomIndex === null || usedIndexList.includes(randomIndex)) {
            randomIndex = getRandomNumber(0, list.length - 1);
        }

        usedIndexList.push(randomIndex);
        shuffledList[index] = list[randomIndex];
    });

    return shuffledList;
}

function getInitialCards() {
    const initialCardList: CardProperties[] = [];

    Object.values(Suit).forEach(suit => {
        Object.values(Rank).forEach(rank => {
            initialCardList.push({
                rank,
                color: ColorMap.get(suit as Suit),
                suit,
                isOpen: false,
                id: window.crypto.randomUUID()
            });
        });
    });

    return initialCardList;
}

export const initialCards = shuffleList(getInitialCards());
