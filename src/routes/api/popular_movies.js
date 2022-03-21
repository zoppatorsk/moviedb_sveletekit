export async function get(props) {
	//const item = await db.get(params.id);
	let page = props.url.searchParams.toString();
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=${
		import.meta.env.VITE_APIKEY
	}&language=en-US&${page}`;
	const res = await fetch(url);
	const json = await res.json();
	if (res.ok) {
		return { body: json };
	}

	return { status: 404 };
}
