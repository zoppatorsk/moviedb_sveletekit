export async function get() {
	import.meta.env.VITE_APIKEY;
	//const item = await db.get(params.id);
	// console.log('pppp', props.url.searchParams.toString());
	// let page = props.url.searchParams.toString();
	let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${
		import.meta.env.VITE_APIKEY
	}&language=en-US&`;
	//let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${'6622ad072ccde0a01f7fda7c9ed09924'}&language=en-US&`;
	const res = await fetch(url);
	const json = await res.json();
	const movies = json.results;
	if (res.ok) {
		return { body: movies };
	}

	return { status: 404 };
}
