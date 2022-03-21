<script context="module">
	export async function load({ params, fetch, url }) {
		let page = 1;
		if (url.searchParams.get('page') !== null) page = url.searchParams.get('page');
		let apiUrl = `/api/search/${params.query}?page=${page}`;

		const res = await fetch(apiUrl);

		if (res.ok) return { props: { movies: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import PageHeading from '../../components/PageHeading.svelte';
	import MovieGrid from '../../components/MovieGrid.svelte';

	export let movies;
</script>

<PageHeading>Search Results</PageHeading>
<MovieGrid {movies} />
{#if movies.length < 1}
	<h2>No movies found!</h2>
{/if}

<style>
	h2 {
		margin-left: 20px;
		color: var(--fg-link-secondary);
	}
</style>
