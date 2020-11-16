const formatProgramChapter = require('./program-chapter')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    disorderId: fields.disorder.sys.id,
    motivationId: fields.motivation.sys.id,
    chapters: fields.chapters.map(formatProgramChapter)
  }
}