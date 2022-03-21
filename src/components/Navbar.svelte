<script>
	let menuVisible = false;
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let search = '';

	const searchMovie = () => {
		if (search !== '') {
			hideMenu();
			goto(`/search/${search}`);
		}
	};
	const hideMenu = () => {
		menuVisible = false;
	};
</script>

<nav class="nav-menu">
	<div id="logo">The Movies</div>
	<ul id="navlinks" class="nav-links {menuVisible ? 'show-links' : ''}">
		<li on:click={hideMenu}><a href="/" class:nav-active={$page.url.pathname === '/'}>Home</a></li>
		<li on:click={hideMenu}>
			<a href="/popular" class:nav-active={$page.url.pathname === '/popular'}>Popular</a>
		</li>
		<div class="search-box">
			<form on:submit|preventDefault={searchMovie}>
				<input type="search" bind:value={search} placeholder="Search movie..." />
				<button type="submit">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
						><path
							d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
						/></svg
					>
				</button>
			</form>
		</div>
	</ul>
	<div class="burger-icon" on:click={() => (menuVisible = !menuVisible)}>
		<div class:transform-first-line={menuVisible} />
		<div class:transform-second-line={menuVisible} />
		<div class:transform-third-line={menuVisible} />
	</div>
</nav>

<style>
	* {
		box-sizing: border-box;
	}
	.icon {
		height: 11px;
		width: auto;
	}
	button:hover {
		cursor: pointer;
	}

	.search-box input {
		padding: 2px;
		margin-right: -2px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		box-shadow: none;
	}
	.search-box input:focus {
		outline: none;
		box-shadow: none;
	}
	.search-box button {
		padding-top: 2px;
		padding-bottom: 2px;
		padding-left: 10px;
		padding-right: 10px;
		border-top-left-radius: 0px;
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
		box-shadow: none;
		background-color: lightblue;
		border-color: lightblue;
		margin: 0;
	}
	.nav-menu {
		font-family: Montserrat, sans-serif;
		align-items: center;
		font-weight: 500;
		/* background-color: var(--bg-color-primary); */
		background-color: rgb(20, 19, 19);
		display: flex;
		min-width: 100%;
		min-height: 60px;
		box-shadow: 0 5px 5px rgba(32, 65, 71, 0.75);
	}
	.nav-menu li {
		margin-right: 20px;
	}

	.nav-menu a {
		font-size: 1em;
		color: var(--fg-link-primary);
		text-decoration: none;
	}
	.nav-menu a:hover,
	a:focus {
		color: var(--fg-link-secondary);
		text-decoration: underline;
	}
	.nav-links {
		align-items: center;
		list-style-type: none;
		display: flex;
		margin-left: auto;
		margin-right: 40px;
	}
	.nav-active {
		font-weight: bold;
	}

	.nav-active::before {
		content: '[ ';
	}
	.nav-active::after {
		content: ' ]';
	}

	#logo {
		color: var(--fg-link-secondary);
		margin-left: 2%;

		font-size: 1.6em;
		font-weight: 600;
	}

	nav .burger-icon {
		display: none;
		cursor: pointer;
		margin-left: auto;
		margin-right: 10%;
	}

	nav .burger-icon div {
		width: 30px;
		height: 5px;
		background-color: var(--fg-link-primary);
		margin: 5px;
		border-radius: 3px;
		transition: all 0.2s ease-in;
	}

	/* "Animering/morph" för burger menu */
	.transform-first-line {
		transform: translateY(10px) rotate(225deg);
	}
	.transform-second-line {
		opacity: 0;
	}
	.transform-third-line {
		transform: translateY(-10px) rotate(-225deg);
	}
	/*END nav menu */

	@media screen and (max-width: 800px) {
		nav .burger-icon {
			display: block;
		}
		.nav-menu {
			flex-wrap: wrap;
			padding-top: 20px;
			padding-bottom: 20px;
		}

		#logo {
			margin-left: 30px;
		}

		.nav-links {
			font-size: 1.5em;
			display: none;
			flex-basis: 100%;
			flex-direction: column;
			align-items: center;
			margin-left: 30px;
			margin-right: 30px;
			margin-top: 20px;
			margin-bottom: 20px;
			padding: 0;
		}
		.nav-links a {
			min-width: 100%;
			padding-top: 10px;
			padding-bottom: 10px;
			display: block;
			margin: 0;
		}

		.nav-links li {
			min-width: 100%;
			margin-right: 0px;
			text-align: center;
		}
		.nav-links a:hover {
			text-decoration: none;

			/* background-color: #d9e5f3; */
		}

		.show-links {
			display: flex;
			position: absolute;
			top: 74px;
			height: 100vh;
			left: 0;
			right: 0;
			margin: 0;
			background-color: #000000df;
		}
	}
</style>
