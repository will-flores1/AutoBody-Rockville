<script>
	import MobileMenu from "./MobileMenu.svelte";

	let sidebar_show = false;

	const toggle = () => {
		sidebar_show = !sidebar_show;
	};
</script>

<div class="mobile_menu">
	<div class="logo">
		<img src="/assets/car_logo.svg" alt="logo" height="30" width="30" />
		<div class="flex_item">
			<div><img src="/assets/clock.svg" alt="hours" width="25" /></div>
			<div>
				<div>Mon-Fri:</div>
				<div>9:00am-6:00pm</div>
			</div>
		</div>
	</div>
	<button on:click={toggle}>
		<div class="hamburger_menu">
			<svg
				width="32"
				height="32"
				viewBox="0 0 18 10"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line y1="9.25" x2="18" y2="9.25" stroke="#ff6a00" stroke-width="1.7" />
				<line y1="5.25" x2="18" y2="5.25" stroke="#ff6a00" stroke-width="1.7" />
				<line y1="1.25" x2="18" y2="1.25" stroke="#ff6a00" stroke-width="1.7" />
			</svg>
		</div>
	</button>

	<MobileMenu bind:show={sidebar_show} />
</div>

<style>
	.mobile_menu {
		padding: 0.5rem 1.5rem;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--background-color);
	}
	.logo {
		color: white;
		display: flex;
		align-items: center;
		gap: 1.3rem;
	}
	.flex_item {
		display: flex;
		gap: 2px;
	}
	button {
		cursor: pointer;
		padding: 0;
		margin: 0;
		padding: 0.7rem;
		border: none;
		background-color: Transparent;
	}
	button:hover {
		background-color: Transparent;
		border: none;
	}

	button:active {
		background-color: #a5a5a5;
	}

	@media (min-width: 768px) {
		.mobile_menu {
			display: none;
		}
	}
</style>
