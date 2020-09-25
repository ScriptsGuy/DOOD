// // next.config.js
const withImages = require('next-images');
module.exports = withImages();

module.exports = {
  env: {
    api: 'https://dood.devzone-dz.com',
    algoliaAppKey: 'LMQ49UKOZA',
    algoliaAdminKey: 'a9adf7fd5943a630c82a62024c953e6e',
    algoliaIndexName: 'restaurants',
  },
};
