import { require } from 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js'
module.exports = self.fetch || (self.fetch = require('unfetch.js').default || require('unfetch.js'));
