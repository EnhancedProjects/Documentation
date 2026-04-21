// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "EnhancedProjects",
	tagline: "Let's enhance it!",
	favicon: "img/favicon.ico",
	url: "https://enhancedprojects.com",
	baseUrl: "/",

	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				docsRouteBasePath: "/",
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					routeBasePath: "/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: "img/social.png",
			navbar: {
				title: "EnhancedProjects",
				logo: {
					alt: "Enhanced Projects Logo",
					src: "img/logo.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Documentation",
					},
					{to: "/blog", label: "Blog", position: "left"},
					{
						href: "https://github.com/EnhancedProjects",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "light",
				links: [
					{
						title: "Developers",
						items: [
							{
								label: "Documentation",
								to: "/docs",
							},
							{
								label: "Source Code",
								href: "https://github.com/EnhancedProjects",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/UwASNsPMkB",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "Founder's GitHub",
								href: "https://github.com/KPGTB",
							},
							{
								label: "Portfolio",
								href: "https://kpgtb.eu",
							},
						],
					},
				],
				logo: {
					alt: "Enhanced Projects Logo",
					src: "img/logo_tekst.png",
					width: "50%",
				},
				copyright: `<br>Copyright © 2024 - ${new Date().getFullYear()} Enhanced Projects founded by KPG-TB.<br>Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.vsDark,
				additionalLanguages: ["java", "lua", "gradle"],
			},
			colorMode: {
				defaultMode: "dark",
			},
		}),
}

export default config
