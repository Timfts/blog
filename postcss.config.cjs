module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-inline-svg')({
        paths: ['public']
      }),
      require('cssnano'),
    ],
  };