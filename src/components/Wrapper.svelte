<script>
    import { initFieldCards } from '../store/field';
    import { initStockCards } from '../store/stock';
    import Available from './Available.svelte';
    import Field from './Field.svelte';
    import Goal from './Goal.svelte';
    import Stock from './Stock.svelte';

    initFieldCards();
    initStockCards();
</script>

<div>
    <div class="wrapper">
        <Stock />
        <Available />
        <Goal />
        <Field />
    </div>
</div>

<style lang="scss">
    .wrapper {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(7, 1fr);
        grid-template-areas:
            'stock available . goal goal goal goal'
            'field field field field field field field';

        width: 50vw;
        padding: 1rem;
    }
</style>
