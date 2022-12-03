<script lang="ts">
    import CardPlaceholder from './CardPlaceholder.svelte';
    import { available } from '../store/available';
    import { getCardById } from '../store/helpers/getCardById';
    import Card from './Card/index.svelte';
    import { setCurrentElementToDrag } from '../store/currentElementToDrag';

    $: card = getCardById($available.at(-1));

    function dragStartHandler(cardId: string) {
        setCurrentElementToDrag([cardId]);
    }
</script>

<div class="available">
    <CardPlaceholder />
    {#if card}
        <Card {...card} dragStartHandler={() => dragStartHandler(card.id)} isOpen={true} />
    {/if}
</div>

<style lang="scss">
    div {
        grid-area: available;
        position: relative;

        :global {
            .card {
                &_is-open {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
</style>
