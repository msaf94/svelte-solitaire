<script>
  import Card from "./Card/index.svelte";
  import { Rank, Suit } from "../constants";

  let isOpen = $$props.isOpen;
</script>

<div class={`placeholder ${isOpen ? "placeholder_is-open" : ""}`}>
  <Card suit={Suit.CLUBS} rank={Rank.ACE} />
</div>

<style lang="scss">
  .placeholder {
    pointer-events: none;
      :global {
        .card {
          &:after {
            background-color: #ebebeb;
          }
          > * {
            opacity: 0;
            pointer-events: none;
          }
        }
      }
  }
</style>
