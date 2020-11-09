const contentful = require('contentful')

const createClient = (space, accessToken, preview = false) => {
  const config = {
    space, accessToken
  }

  if (preview) {
    config.host = 'preview.contentful.com'
  }

  return contentful.createClient(config)
}


module.exports = createClient