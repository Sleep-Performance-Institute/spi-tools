const formatMotivation = require('../formatters/motivation')

module.exports = async (contentful, disorderId) => {
  const entries = await contentful.getEntries({
    content_type: 'sleepProgram',
    'fields.disorder.sys.id': disorderId,
    include: 4
  })

  if (!entries.items || entries.items.length < 1) {
    return null
  }

  return entries.items.map(({fields}) => formatMotivation(fields.motivation))
}