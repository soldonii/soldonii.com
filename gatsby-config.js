module.exports = {
  siteMetadata: {
    title: `soldonii's blog`,
    name: `soldonii`,
    siteUrl: `https://soldonii.com`,
    description: `Web Frontend Engineer soldonii의 블로그입니다.`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/soldonii`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/soldonii`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/hyunsol-do-91058a189`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `soldonii's blog`,
        short_name: `soldonii`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
