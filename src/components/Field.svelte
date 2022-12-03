<script lang="ts">
    import { cardDestination, setCardDestination } from '../store/cardDestination';
    import { currentElementToDrag, setCurrentElementToDrag } from '../store/currentElementToDrag';
    import {
        availableFieldColumn,
        field,
        isAvailableToPlaceCardIntoField,
        setAvailableFieldColumn,
        setIsAvailableToPlaceCardIntoField
    } from '../store/field';
    import { getCardIdsBelowSelected } from '../store/field';
    import { checkIsAvailableToPlaceCard } from '../store/helpers/checkIsAvailableToPlaceCard';
    import Card from './Card/index.svelte';

    const cardClassname = 'field-card';

    $: cards = Array.from($field.values());

    function dragEnterHandler(column: number) {
        return (e: DragEvent) => {
            e.stopPropagation();

            const currentColumnCard = $field.get(column);
            const lastCardOfCurrentColumn = currentColumnCard.at(-1);

            setAvailableFieldColumn(column);
            setCardDestination('field');

            setIsAvailableToPlaceCardIntoField(
                checkIsAvailableToPlaceCard({
                    whatToPlaceId: $currentElementToDrag[0],
                    whereToPlaceId: lastCardOfCurrentColumn?.id,
                    destination: $cardDestination
                })
            );
        };
    }

    function dragStartHandler(column: number, cardId: string) {
        setCurrentElementToDrag(getCardIdsBelowSelected(column, cardId).map(card => card.id));
    }
</script>

<div class="field">
    {#each cards as card, column}
        <div
            class={`column ${
                $isAvailableToPlaceCardIntoField && $availableFieldColumn === column ? 'column_highlight' : ''
            }`}
            on:dragenter={dragEnterHandler(column)}
        >
            {#each card as cardItem}
                <Card
                    {column}
                    dragStartHandler={() => dragStartHandler(column, cardItem.id)}
                    class={cardClassname}
                    {...cardItem}
                />
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    $cardClassname: 'field-card';

    .field {
        grid-area: field;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        column-gap: 1rem;
    }
    .column {
        &_highlight {
            :global {
                &:empty {
                    background-color: #c0b1ff;
                }
                .card {
                    &:last-child {
                        background-color: #c0b1ff;
                    }
                }
            }
        }
        :global {
            .#{$cardClassname} {
                & {
                    + .#{$cardClassname} {
                        margin-top: -7rem;
                    }
                }
            }
        }
    }
</style>
