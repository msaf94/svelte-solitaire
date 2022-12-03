<script>
    import SuiteIcon from "../SuiteIcon/SuiteIcon.svelte";
    import { getRankSymbol } from "./helpers/getRankSymbol";

    $: rankSymbol = getRankSymbol($$props.rank);
    $: color = $$props.color;
</script>

<div class="rank" style="color: {color}">
    <span>{rankSymbol}</span>
    <SuiteIcon class="icon" suit={$$props.suit} color={$$props.color} />
</div>

<style lang="scss">
    .rank {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        column-gap: 0.1rem;
        justify-content: space-between;
        :global {
            .icon {
                $icon-size: 1.3rem;

                width: $icon-size;
                height: $icon-size;
            }
        }
    }
</style>
