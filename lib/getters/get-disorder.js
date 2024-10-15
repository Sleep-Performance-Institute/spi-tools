const formatDisorder = require('../formatters/disorder')
const formatProgram = require('../formatters/program')
const formatMotivation = require('../formatters/motivation')

module.exports = async (contentful, id) => {
  const [disorderEntry, programEntries] = await Promise.all([
    contentful.getEntry(id, { include: 5 }),
    contentful.getEntries({
      content_type: 'sleepProgram',
      'fields.disorder.sys.id': id,
      include: 4
    })
  ])

  const disorder = formatDisorder(disorderEntry)

  if (!programEntries.items || programEntries.items.length < 1) {
    return {
      ...disorder,
      programs: [],
      motivations: []
    }
  }

  const programs = programEntries.items.map(formatProgram)
  const motivations = programEntries.items.map(({fields}) => formatMotivation(fields.motivation))
  
  return {
    ...disorder,
    programs,
    motivations
  }
}