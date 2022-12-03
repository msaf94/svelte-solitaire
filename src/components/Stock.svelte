<script lang="ts">
    import { addAvailableCard, clearAvailableCards, available } from '../store/available';
    import { popStockCard, resetStock } from '../store/stock';
    import CardPlaceholder from './CardPlaceholder.svelte';

    function clickHandler() {
        const cardId: string | undefined = popStockCard();

        if (cardId) {
            addAvailableCard(cardId);
        } else {
            resetStock([...$available].reverse());
            clearAvailableCards();
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="stock" on:click={clickHandler}>
    <CardPlaceholder />
</div>

<style lang="scss">
    .stock {
        grid-area: stock;

        :global {
            & > * {
                & > .card {
                    &:after {
                        background-color: #7a5aff;
                    }
                }
            }
        }
    }
</style>
