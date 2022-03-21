<footer>
	<div class="box">
		<a href="https://www.themoviedb.org/"> <img src="/tmdb.svg" alt="tmdb logo" /></a>
		<p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
	</div>
	<div class="box">
		<a href="https://kit.svelte.dev/">
			<img class="svelte-logo" src="/svelte_log.svg" alt="Svelte logo" />
		</a>
		<p>This site was built with Svelte/Sveltekit for learning purposes.</p>
	</div>
</footer>

<style>
	footer {
		/* background-color: rgb(17, 20, 19); */
		background-color: var(--bg-color-secondary);
		font-weight: 200;
		/* color: rgb(233, 233, 233); */
		color: var(--fg-color-primary);
		display: flex;
		flex-direction: row;

		padding: 20px;
	}
	.box {
		width: 220px;

		padding: 10px;
	}
	.box img {
		height: 20px;
		width: auto;
	}
	.box > a > .svelte-logo {
		margin-top: -2px;
		height: 22px;
	}
	@media screen and (max-width: 400px) {
		footer {
			flex-direction: column;
			align-items: center;
		}
		.box {
			margin-top: 10px;
		}
	}
</style>
