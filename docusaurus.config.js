// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "ProjectEnhanced",
	tagline: "Enhance popular libraries",
	favicon: "img/favicon.ico",
	url: "https://projectenhanced.dev",
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
				title: "ProjectEnhanced",
				logo: {
					alt: "Project Enhanced Logo",
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
						href: "https://github.com/KPGTB",
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
								label: "JavaDocs",
								hreft: "https://javadocs.projectenhanced.dev",
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
								label: "GitHub",
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
					alt: "ProjectEnhanced Logo",
					src: "img/logo_tekst.png",
					width: "50%",
				},
				copyright: `Copyright © 2024 - ${new Date().getFullYear()} Project Enhanced founded by KPG-TB.<br>Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				additionalLanguages: ["java", "lua", "gradle"],
			},
		}),
}

export default config
