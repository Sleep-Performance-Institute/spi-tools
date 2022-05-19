const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    salesTitle: fields.salesTitle
  }
}