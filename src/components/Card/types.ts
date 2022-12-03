import type { Rank, Suit } from '../../constants';

export interface CardProperties {
    suit: Suit;
    color: string;
    rank: Rank;
    isOpen: boolean;
    id: string;
}
