import type { CardProperties } from "../../components/Card/types";

export function getInitialEmptyCardMap(length: 4 | 7) {
    const map = new Map<number, CardProperties[]>();

    for (let index = 0; index < length; index++) {
        map.set(index, [])
    }

    return map;
}