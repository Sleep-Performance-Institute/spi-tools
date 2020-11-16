const formatProgramTask = require('../formatters/program-task')
const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    name: fields.name,
    mySleepCardImage: `https:${fields.mySleepCardImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    tasks: fields.tasks ? fields.tasks.map(formatProgramTask) : []
  }
}