const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
require('dotenv').config();

module.exports = withFonts(
  withCss(
    withSass(
      withImages({
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        },
        env: {
          BASE_URL: process.env.BASE_URL,
          ENV: process.env.ENV
        }
      })
    )
  )
);
