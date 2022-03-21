//api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export async function get({ params, url }) {
	let page = url.searchParams.toString();
	let apiurl = `https://api.themoviedb.org/3/search/movie?api_key=${
		import.meta.env.VITE_APIKEY
	}&language=en-US&query=${params.query}&${page}&include_adult=false`;
	const res = await fetch(apiurl);
	const json = await res.json();
	const movies = json.results;
	if (res.ok) {
		return { body: movies };
	}

	return { status: 404 };
}
