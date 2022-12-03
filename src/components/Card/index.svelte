<script lang="ts">
    import { manageCardPlacement } from '../../store';
    import SuiteIcon from '../SuiteIcon/SuiteIcon.svelte';
    import RankAndSuit from './RankAndSuit.svelte';

    $: isOpen = $$props.isOpen;
    let hide = false;

    document.ondragover = e => {
        e.preventDefault();
    };
</script>

<div
    class={`card ${$$props.class ? $$props.class : ''} ${isOpen ? 'card_is-open' : ''} ${hide ? 'card_is-hidden' : ''}`}
    draggable={isOpen}
    on:dragstart={$$props.dragStartHandler}
    on:dragend={manageCardPlacement}
>
    {#each { length: 2 } as _, i}
        <RankAndSuit suit={$$props.suit} rank={$$props.rank} color={$$props.color} />
    {/each}
    <div class="icon-wrapper">
        <SuiteIcon suit={$$props.suit} color={$$props.color} />
    </div>
</div>

<style lang="scss">
    .card {
        display: grid;
        background-color: #fff;
        position: relative;
        box-shadow: 0 0 0px 1px #ebebeb;
        border-radius: 5px;
        padding: 0.5rem;
        row-gap: 1rem;
        transition: background-color 0.2s;

        &:after {
            content: '';
            background-color: #7a5aff;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border: 5px solid white;
            border-radius: 10px;
        }
        &_is-open {
            background: white;
            cursor: pointer;

            &:hover {
                background-color: #f2efff;
            }
            &:after {
                content: none;
            }
        }
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        order: 2;
    }

    :global {
        .card {
            .rank {
                order: 1;
                + .rank {
                    order: 3;
                    span {
                        order: 1;
                    }
                }
            }
        }
    }
</style>
