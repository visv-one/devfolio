module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Viswa Sai Gubbala',
    // Main Site Title
    title: `Viswa Sai Gubbala | Front-end Developer`,
    // Description that goes under your name in main bio
    description: `Front-end Developer`,
    // Optional: Twitter account handle
    author: `@_viswasai`,
    // Optional: Github account URL
    github: `https://github.com/visvxplore/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/viswasai/`,
    // Content of the About Me section
    about: `I work on web technologies in Front-end. Graduated in EEE, started career in Web development with passion towards the Web Technologies. Web ❤.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Lifestyle Bot',
        description:
          'Lifestyle Bot helps users to opt the specific clothing and matchings to wear.',
        link: 'http://bot.lifestyle.fabulyst.com/',
      },
      {
        name: 'Fabulyst Admin Dashboard',
        description:
          'Worked on admin dashboard related to fabulyst organisation.',
        link: 'https://www.fabulyst.ai/',
      },
      {
        name: 'Letsmobility',
        description:
          'Letsmobility is a app developing IT company.',
        link: 'https://letsmobility.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Tech Mahindra',
        description: 'Senior Associate Engineer, April 2022 -  Present',
        link: 'https://techmahindra.com/',
      },
      {
        name: 'Oi',
        description: 'Front-end Developer, January 2020 -  March 2022',
        link: 'https://oi.co.uk/',
      },
      {
        name: 'Letsmobility',
        description: 'Web Developer, August 2017 -  September 2019',
        link: 'https://letsmobility.com/',
      },
      {
        name: '3Dfy',
        description: 'Intern Web Developer, February 2017 - April 2017',
        link: 'https://www.3dfy.co.in/explore/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'HTML5, CSS3, JavaScript (ES6+), Angular, React, Vue, Node.js, Express.js',
      },
      {
        name: 'Databases',
        description: 'MongoDB',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
