<script>
	import Navbar from '../components/Navbar.svelte';
	import Foot from '../components/Foot.svelte';
</script>

<svelte:head>
	<title>The Movies</title>
</svelte:head>
<header class="sticky-nav">
	<Navbar />
</header>
<main>
	<slot />
</main>
<Foot />

<style>
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		margin-top: 0em;
		background-color: rgb(32, 31, 31);
		/* background: rgb(1, 1, 15);
		background: linear-gradient(
			18deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(58, 58, 64, 1) 89%,
			rgb(13, 22, 24) 100% */

		/* margin-bottom: 2em; */
	}

	.sticky-nav {
		top: 0;
		position: sticky;
		z-index: 9999;
		background-color: lightgrey;
	}
</style>
