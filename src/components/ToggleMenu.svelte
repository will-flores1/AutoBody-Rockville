<script>
	import MobileMenu from "./MobileMenu.svelte";
	let sidebar_show = false;

	const toggle = () => {
		sidebar_show = !sidebar_show;
		console.log("coc");
	};
</script>

<div class="mobile_menu">
	<div class="logo">hello world</div>
	<button on:click={toggle}>Toggle Sidebar</button>

	<MobileMenu bind:show={sidebar_show} />
</div>

<style>
	.mobile_menu {
		padding: 0 0.25rem;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #1a1a1b;
	}
	.logo {
		color: white;
	}
	button {
		cursor: pointer;
		padding: 0;
		margin: 0;
		padding: 1.5rem;
	}

	@media (min-width: 768px) {
		.mobile_menu {
			display: none;
		}
	}
</style>
