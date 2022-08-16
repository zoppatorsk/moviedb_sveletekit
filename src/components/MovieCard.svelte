<script>
	export let movie;
</script>

<a sveltekit:prefetch href={`/details/${movie.id}`} class="movie-card grow">
	{#if movie.poster_path == null}
		<img src={`/placeholder200x300.png`} alt="placeholder" />
	{:else}
		<img
			src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
			alt={movie.title}
			width="200"
			height="300"
		/>
	{/if}
	<div class="card-contents">
		<small class="year">{movie.release_date.split('-')[0]}</small>
		<h2>{movie.title}</h2>
	</div>
</a>

<style>
	.movie-card {
		font-family: 'Noto Sans Display', sans-serif;
		display: flex;
		flex-direction: column;

		/* box-shadow: rgba(109, 187, 246, 0.835) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
		/* border: 1px solid black; */
		border-top-right-radius: 0.5em;
		border-top-left-radius: 0.5em;
		max-width: 200px;
	}
	img {
		display: block;

		height: auto;
		max-width: 300px;
		border-top-right-radius: 0.5em;
		border-top-left-radius: 0.5em;
	}
	.card-contents {
		height: 100%;

		text-align: center;
		padding-top: 0.8em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		padding-bottom: 1em;
		background-color: var(--bg-color-secondary);
		color: var(--fg-link-secondary);
	}
	.card-contents h2 {
		margin-top: 0.2em;
		font-size: 1.2em;
		font-weight: 600;
	}
	.year {
		color: var(--fg-link-primary);
		font-weight: 600;
		letter-spacing: 0.08em;
	}
	.grow {
		transition: all 0.1s ease-in-out;
	}
	.grow:hover {
		transform: scale(1.1);
	}
	a {
		all: unset;
	}
	a:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 810px) {
		.grow {
			transition: none;
		}
		.grow:hover {
			transform: none;
		}
	}
</style>
