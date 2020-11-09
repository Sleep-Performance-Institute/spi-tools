const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    name: fields.name,
    audioDescription: fields.audioDescription,
    readOnlyDescription: fields.readOnlyDescription,
    audioBackground: `https:${fields.audioBackground.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    readOnlyBackground: `https:${fields.readOnlyBackground.fields.file.url}?${CONTENTFUL_PARAMS.THUMB}`
  }
}