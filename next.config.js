const withSass = require('@zeit/next-sass');

// Add this after your declarations 
module.exports = withSass({
  target: 'serverless',
  sassLoaderOptions: {}
})