export async function get({ params }) {
	let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
		import.meta.env.VITE_APIKEY
	}&language=en-US`;
	const res = await fetch(url);
	const movie = await res.json();
	if (res.ok) {
		return { body: movie };
	}

	return { status: 404 };
}
