import type { ComponentType } from "svelte";
import { Suit } from "../../../constants";
import Clubs from "../icons/Clubs.svelte";
import Diamonds from "../icons/Diamonds.svelte";
import Hearts from "../icons/Hearts.svelte";
import Spades from "../icons/Spades.svelte";

export const suitMap = new Map<Suit, ComponentType>();

suitMap.set(Suit.CLUBS, Clubs);
suitMap.set(Suit.DIAMONDS, Diamonds);
suitMap.set(Suit.HEARTS, Hearts);
suitMap.set(Suit.SPADES, Spades);
