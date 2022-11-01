module.exports = {
  siteMetadata: {
    title: `Rahan Bouess`,
    siteUrl: `https://www.rahanbouess.com`,
    description: `Hi and Welcome to my website , here you will find the latest info about me , work and book i read , Feel free to connect with me`,
    twitterUsername: `@rbouess`,
    image: `src/images/profile.jpg`,
    
  },
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/profile.jpg", 
      },
    },
  ]
};
