<script lang="ts">
    import { suitMap } from "./constants/suitMap";

    $: color = $$props.color;
</script>

<div class={`suite-icon-wrapper ${$$props.class}`} style="color: {color}">
    <svelte:component this={suitMap.get($$props.suit)} />
</div>

<style lang="scss">
    $icon-size: 3rem;

    .suite-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: $icon-size;
        height: $icon-size;

        :global {
            svg {
                fill: currentColor;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
