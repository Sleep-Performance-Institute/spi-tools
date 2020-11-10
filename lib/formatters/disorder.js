const formatProgramTask = require('../formatters/program-task')

module.exports = ({ fields, sys }) => {
  console.log(fields)
  return {
    id: sys.id,
    name: fields.name,
    tasks: fields.tasks && fields.tasks.map(formatProgramTask)
  }
}