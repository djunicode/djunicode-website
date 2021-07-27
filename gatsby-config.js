module.exports = {
	siteMetadata: {
		siteUrl: "https://www.djunicode.in",
		title: "D. J. Unicode",
		description:
			"Official site for Unicode, a student coding club of Dwarkadas J. Sanghvi College of Engineering.",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/unicode-icon.svg",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
