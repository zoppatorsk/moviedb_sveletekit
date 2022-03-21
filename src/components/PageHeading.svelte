<div class="header">
	<h1><slot /></h1>
</div>

<style>
	.header {
		margin-top: 4px;
		padding: 20px;
		background-color: var(--bg-color-secondary);
		color: var(--fg-color-primary);
	}
	.header h1 {
		margin-left: 20px;
	}
	@media screen and (max-width: 500px) {
		.header {
			font-size: 70%;
		}
	}
</style>
