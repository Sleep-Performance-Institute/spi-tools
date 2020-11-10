const formatAssessment = require('../formatters/assessment')

module.exports = async (contentful, assessmentId) => {
  if (assessmentId) {
    const entry = await contentful.getEntry(assessmentId, { include: 4 })

    return formatAssessment(entry)
  } else {
    const entries = await contentful.getEntries({
      content_type: 'assessment',
      order: '-sys.updatedAt',
      limit: 1,
      include: 0
    })
  
    if (!entries.items || entries.items.length < 1) {
      return null
    }
  
    const entry = await contentful.getEntry(entries.items[0].sys.id, { include: 4 })
  
    return formatAssessment(entry)
  }
}