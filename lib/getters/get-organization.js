const formatOrganization = require('../formatters/organization')

module.exports = async (contentful, inviteCode) => {
    const entries = await contentful.getEntries({
      content_type: 'organization',
      order: '-sys.updatedAt',
      'fields.inviteCode': inviteCode.toLocaleUpperCase(),
      include: 0,
      limit: 1
    })
  
    if (!entries.items || entries.items.length < 1) {
      return null
    }

    const entry = await contentful.getEntry(entries.items[0].sys.id, { include: 4 })
  
    return formatOrganization(entry)
}