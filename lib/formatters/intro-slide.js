const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    color: fields.color
  }
}