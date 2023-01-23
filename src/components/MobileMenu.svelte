<script>
	import { fly } from "svelte/transition";
	import { paths } from "../const.js";

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
					<img
						src="/assets/xmark.svg"
						alt="close menu"
						height="30"
						width="30"
					/>
				</button>
			</li>
			{#each paths as item}
				<li class="list_item">
					<a href={item.path}><div>{item.title}</div></a>
				</li>
			{/each}
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
		background-color: rgb(234, 234, 234);
		border: 1px solid rgba(0, 0, 0, 0.45);
		color: white;
		padding: 0;
		margin: 0;
		width: 100%;
		padding: 2rem 0px;
		cursor: pointer;
	}
	.close:active {
		background-color: rgba(0, 0, 0, 0.6);
	}
</style>
