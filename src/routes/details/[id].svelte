<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/details/${params.id}`);

		if (res.ok) {
			let movie = await res.json();
			const recomendedRes = await fetch(
				`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${
					import.meta.env.VITE_APIKEY
				}&language=en-US&page=1`
			);
			let slides = [];
			let recomended = await recomendedRes.json();
			recomended.results.forEach((x) => {
				if (x.poster_path) {
					slides.push({
						id: x.id,
						src: `https://image.tmdb.org/t/p/w185${x.poster_path}`,
						height: 300,
						width: 185,
						alt: x.title
					});
				}
			});
			slides = [...slides];
			return { props: { movie, slides } };
		}

		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import '@splidejs/splide/dist/css/splide.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import CategoryTag from '../../components/CategoryTag.svelte';
	export let movie, slides;

	let options = {
		rewind: false,
		autoWidth: true,
		fixedWidth: '185px',
		fixedHeight: '300px',
		destroy: true,
		pagination: false
	};
</script>

<div class="header">
	<h1>{movie.title}</h1>
	{#if movie.original_title !== movie.title}
		<p>( {movie.original_title} )</p>
	{/if}
</div>
<div class="details-wrapper">
	{#if movie.backdrop_path}
		<img
			src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
			alt={movie.time}
			width="780"
			height="439"
		/>
	{/if}

	<div class="movie-details">
		<q>{movie.tagline ? movie.tagline : 'No tagline for this movie'}</q>
		<time>{movie.release_date}</time>
		<p>{movie.overview}</p>
		<div class="genre-wrapper">
			{#each movie.genres as genre}
				<CategoryTag>{genre.name}</CategoryTag>
			{/each}
		</div>
	</div>
</div>
{#if slides.length > 0}
	<div class="similar-movies">
		<h2>You Might Also Like</h2>

		<div class="slide-wrapper">
			<Splide {options}>
				{#each slides as slide}
					<SplideSlide>
						<a href={`/details/${slide.id}`}>
							<img src={slide.src} alt={slide.alt} width={slide.width} height={slide.height} />
						</a>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
{/if}

<style>
	.similar-movies {
		padding-top: 60px;
		padding-bottom: 60px;
		background-color: var(--bg-color-primary);
		/* text-align: center; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.similar-movies h2 {
		color: var(--fg-color-primary);
		margin-bottom: 20px;
	}
	.slide-wrapper {
		max-width: 100%;
	}
	.details-wrapper {
		display: flex;

		background-color: var(--bg-light);
	}

	.details-wrapper > img {
		object-fit: cover;
	}

	.header {
		margin-top: 4px;
		padding: 20px;
		background-color: var(--bg-color-secondary);
		color: var(--fg-color-primary);
	}
	.header h1 {
		margin-left: 20px;
	}
	.header p {
		margin-left: 30px;
	}

	.movie-details {
		display: flex;
		flex-direction: column;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 20px;
		padding-bottom: 20px;
		max-width: 800px;
	}
	.movie-details q {
		margin-left: -14px;
		font-size: 150%;
		font-style: italic;
		font-weight: 600;
		display: block;
	}
	.movie-details time {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: 120%;
		margin-top: 10px;
		margin-bottom: 10px;
		display: block;
	}
	.movie-details p {
		margin-bottom: 10px;
	}

	.genre-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		align-content: flex-end;

		flex-grow: 1;
	}
	@media screen and (max-width: 1200px) {
		.details-wrapper {
			flex-direction: column;
		}
		.details-wrapper > img {
			width: 100%;
		}
		.details-wrapper > img {
			object-fit: cover;
		}
		.movie-details {
			max-width: 1000px;
			align-self: center;
		}
	}

	@media screen and (max-width: 500px) {
		.header {
			font-size: 70%;
		}
	}
</style>
