const formatProgram = require('../formatters/program')

module.exports = async (contentful) => {
    const entries = await contentful.getEntries({
      content_type: 'sleepProgram',
      order: '-sys.updatedAt',
      include: 4
    })
  
    if (!entries.items || entries.items.length < 1) {
      return []
    }
  
    return entries.items.map(entry => formatProgram(entry))
}