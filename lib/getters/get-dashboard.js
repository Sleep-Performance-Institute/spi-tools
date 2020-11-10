const formatDashboard = require('../formatters/dashboard')

module.exports = async (contentful) => {
  const entries = await contentful.getEntries({
    content_type: 'dashboard',
    order: '-sys.updatedAt',
    limit: 1,
    include: 0
  })

  if (!entries.items || entries.items.length < 1) {
    return null
  }

  const entry = await contentful.getEntry(entries.items[0].sys.id, { include: 4 })

  return formatDashboard(entry)
}