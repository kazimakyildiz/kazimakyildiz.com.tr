module.exports = {
 siteMetadata: {
  title: 'Kazım Akyıldız | Performans Pazarlaması',
  description: 'Google Ads ve Facebook Ads ve diğer reklam platformlarındaki yenilikleri ve kendi işimi kolaylaştıran araçları ve deneyimlerimi paylaşıyorum.',
},
 plugins: [
  'gatsby-plugin-react-helmet',
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/img`,
      name: 'uploads',
    },
  },
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      indentedSyntax: true
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/img`,
      name: 'images',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 2048,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static',
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },
  {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      develop: true,
      purgeOnly: ['/all.sass'],
    },
  },
  'gatsby-plugin-netlify',
],
}
