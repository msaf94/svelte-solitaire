<script lang="ts">
    import { checkIsAvailableToPlaceCard } from '../store/helpers/checkIsAvailableToPlaceCard';
    import CardPlaceholder from './CardPlaceholder.svelte';
    import Card from './Card/index.svelte';
    import {
        goal,
        setAvailableGoalColumn,
        setIsAvailableToPlaceCardIntoGoal,
        availableGoalColumn,
        isAvailableToPlaceCardIntoGoal
    } from '../store/goal';
    import { currentElementToDrag, setCurrentElementToDrag } from '../store/currentElementToDrag';
    import { cardDestination, setCardDestination } from '../store/cardDestination';

    function dragEnterHandler(e: DragEvent, column: number) {
        e.stopPropagation();

        const currentColumnCard = $goal.get(column);
        const lastCardOfCurrentColumn = currentColumnCard[currentColumnCard.length - 1];

        setAvailableGoalColumn(column);
        setCardDestination('goal');
        setIsAvailableToPlaceCardIntoGoal(
            checkIsAvailableToPlaceCard({
                whatToPlaceId: $currentElementToDrag[0],
                whereToPlaceId: lastCardOfCurrentColumn?.id,
                destination: $cardDestination
            })
        );
    }

    function dragStartHandler(cardId: string) {
        setCurrentElementToDrag([cardId]);
    }

    const cardClassname = 'goal-card';
</script>

<div class="goal">
    {#each { length: 4 } as _, i}
        <div
            class={`column ${$availableGoalColumn === i && $isAvailableToPlaceCardIntoGoal ? 'highlight' : ''}`}
            on:dragenter={e => dragEnterHandler(e, i)}
        >
            <CardPlaceholder />
            {#each $goal.get(i) as columnCard}
                <Card class={cardClassname} dragStartHandler={() => dragStartHandler(columnCard.id)} {...columnCard} isOpen={true} />
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    $cardClassname: 'goal-card';

    .goal {
        grid-area: goal;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
    }

    .column {
        position: relative;
        :global {
            .placeholder {
                position: absolute;
                width: 100%;
            }
            .#{$cardClassname} {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
            }
        }
    }

    .highlight {
        :global {
            .goal-card,
            .placeholder .card:after {
                background-color: #c0b1ff;
            }
        }
    }
</style>
