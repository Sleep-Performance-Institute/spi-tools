const formatDisorder = require('../formatters/disorder')

module.exports = async (contentful, id) => {
  const entry = await contentful.getEntry(id, { include: 4 })

  return formatDisorder(entry)
}