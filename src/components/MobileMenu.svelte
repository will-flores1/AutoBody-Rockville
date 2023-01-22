<script>
	import { fly } from "svelte/transition";

	export let show = false;
</script>

{#if show}
	<nav
		class="menu_wrapper"
		transition:fly={{ x: 1000, opacity: 0.9, duration: 750 }}
	>
		<ul>
			<li>
				<button on:click={() => (show = !show)} class="close">
					<div>X</div>
				</button>
			</li>
			<li class="list_item"><a href="/"><div>Home</div></a></li>
			<li class="list_item"><a href="/services"><div>Services</div></a></li>
			<li class="list_item"><a href="/contactus"><div>Contact Us</div></a></li>
			<li class="list_item"><a href="/faq"><div>FAQ</div></a></li>
		</ul>
	</nav>
{/if}

<style>
	.menu_wrapper {
		padding: 0;
		margin: 0;
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		border-left: 1px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 100%;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.list_item {
		padding: 2rem;
		text-transform: uppercase;
		cursor: pointer;
	}
	.list_item:hover > a {
		color: #ff0000;
	}
	.list_item {
		padding: 0;
		border-bottom: 1px solid black;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a > div {
		padding: 3rem 1.5rem;
		font-size: 2.5rem;
		font-weight: 500;
	}
	.close {
		background-color: black;
		color: white;
		padding: 0;
		margin: 0;
		width: 100%;
		padding: 3rem 0px;
		cursor: pointer;
	}
	.close:active {
		background-color: blue;
	}
</style>
