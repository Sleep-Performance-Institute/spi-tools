const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    salesImage: `https:${fields.salesImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    salesTitle: fields.salesTitle,
    salesBody: fields.salesBody,
    salesLink: fields.salesLink,
    memberImage: `https:${fields.memberImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    memberTitle: fields.memberTitle,
    memberBody: fields.memberBody,
    memberPhone: fields.memberPhone
  }
}