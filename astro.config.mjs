import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	integrations: [
		,
		svelte(),
		mdx(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
