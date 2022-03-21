<script context="module">
	export async function load({ fetch }) {
		//if url.searchParams.toString()
		const res = await fetch(`/api/trending`);

		if (res.ok) {
			console.log(await res.json);
			return { props: { movies: await res.json() } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let movies;
	import PageHeading from '../components/PageHeading.svelte';
	import MovieGrid from '../components/MovieGrid.svelte';
</script>

<PageHeading>Top 20 Trending Movies This Week</PageHeading>
<MovieGrid {movies} />
