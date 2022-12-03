import { rankSymbolsMap, type Rank } from "../../../constants";

export function getRankSymbol(rank: Rank) {
    return rankSymbolsMap.get(rank);
}