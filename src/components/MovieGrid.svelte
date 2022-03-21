<script>
	import MovieCard from './MovieCard.svelte';
	export let movies;
</script>

<div class="movie-grid">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.movie-grid {
		padding: 40px;
		width: 100%;
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(233px, 1fr)); */
		grid-template-columns: repeat(auto-fit, minmax(200px, auto));
		grid-column-gap: 1rem;
		grid-row-gap: 3rem;
		justify-items: center;
	}

	@media screen and (max-width: 600px) {
		.movie-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
	}
</style>
