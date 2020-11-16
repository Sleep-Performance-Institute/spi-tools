const formatLibraryCarousel = require('../formatters/library-carousel')

module.exports = async (contentful) => {
  const entries = await contentful.getEntries({
    content_type: 'libraryCarousel',
    order: '-sys.updatedAt',
    limit: 100,
    include: 4
  })

  if (!entries.items || entries.items.length < 1) {
    return []
  }

  return entries.items.map(formatLibraryCarousel)
}