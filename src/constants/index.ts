export enum Suit {
    DIAMONDS = 'diamonds',
    CLUBS = 'clubs',
    HEARTS = 'hearts',
    SPADES = 'spades'
}

enum Color {
    RED = '#ff0000',
    BLACK = '#000000'
}

export const ColorMap = new Map<Suit, string>();

ColorMap.set(Suit.CLUBS, Color.BLACK);
ColorMap.set(Suit.SPADES, Color.BLACK);
ColorMap.set(Suit.HEARTS, Color.RED);
ColorMap.set(Suit.DIAMONDS, Color.RED);

export enum Rank {
    ACE = 'ace',
    TWO = 'two',
    THREE = 'three',
    FOUR = 'four',
    FIVE = 'five',
    SIX = 'six',
    SEVEN = 'seven',
    EIGHT = 'eight',
    NINE = 'nine',
    TEN = 'ten',
    JACK = 'jack',
    QUEEN = 'queen',
    KING = 'king'
}

export const rankOrder = [
    Rank.ACE,
    Rank.TWO,
    Rank.THREE,
    Rank.FOUR,
    Rank.FIVE,
    Rank.SIX,
    Rank.SEVEN,
    Rank.EIGHT,
    Rank.NINE,
    Rank.TEN,
    Rank.JACK,
    Rank.QUEEN,
    Rank.KING
];

export const rankSymbolsMap = new Map<Rank, string>();

rankSymbolsMap.set(Rank.ACE, 'A');
rankSymbolsMap.set(Rank.TWO, '2');
rankSymbolsMap.set(Rank.THREE, '3');
rankSymbolsMap.set(Rank.FOUR, '4');
rankSymbolsMap.set(Rank.FIVE, '5');
rankSymbolsMap.set(Rank.SIX, '6');
rankSymbolsMap.set(Rank.SEVEN, '7');
rankSymbolsMap.set(Rank.EIGHT, '8');
rankSymbolsMap.set(Rank.NINE, '9');
rankSymbolsMap.set(Rank.TEN, '10');
rankSymbolsMap.set(Rank.JACK, 'J');
rankSymbolsMap.set(Rank.QUEEN, 'Q');
rankSymbolsMap.set(Rank.KING, 'K');
