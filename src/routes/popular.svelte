<script context="module">
	export async function load({ fetch, url }) {
		let page = 1;
		if (url.searchParams.get('page') !== null) page = url.searchParams.get('page');
		const res = await fetch(`/api/popular_movies?page=${page}`);

		if (res.ok) {
			return { props: { movieData: await res.json() } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';

	export let movieData; //data from first api request
	// @ts-ignore
	export let movies = [...movieData.results] || []; //get the movies from movie data array.
	// @ts-ignore
	let currentPage = movieData.page || 0;
	// @ts-ignore
	let totalpages = movieData.total_pages || 0;
	//if have no searchparams for page we set the page to that data
	if ($page.url.searchParams.get('page') !== null)
		currentPage = parseInt($page.url.searchParams.get('page'));

	import MovieGrid from '../components/MovieGrid.svelte';
	import PageHeading from '../components/PageHeading.svelte';

	const fetchData = async (newPage) => {
		const res = await fetch(`/api/popular_movies?page=${newPage}`);
		if (res.ok) {
			let json = await res.json();
			currentPage = json.page;
			movies = [...movies, ...json.results];
		}
	};

	// Will be called when we've scrolled to the point where more data needs to be fetched
	const handleChange = (e) => {
		if (e.detail.inView && currentPage <= totalpages) {
			fetchData(currentPage + 1);
		}
	};
</script>

<PageHeading>Popular Movies</PageHeading>
<MovieGrid {movies} />
<!-- This component is place RIGHT BELOW the last post fetched. handleChange will be triggered
	as soon as it appears on frame. We'll use this info to know when to fetch more data  -->
<div class="inview" use:inview={{ rootMargin: '60%' }} on:enter={handleChange} />

<style>
	.inview {
		align-self: flex-end;
		height: 100px;
		background-color: red;
	}
</style>
