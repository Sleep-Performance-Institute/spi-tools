const formatProgramIntroCarousel = require('../formatters/program-intro-carousel')

module.exports = async (contentful) => {
  const entries = await contentful.getEntries({
    content_type: 'programIntroCarousel',
    order: '-sys.updatedAt',
    limit: 1,
    include: 0
  })

  if (!entries.items || entries.items.length < 1) {
    return {}
  }

  const entry = await contentful.getEntry(entries.items[0].sys.id, { include: 4 })

  return formatProgramIntroCarousel(entry)
}