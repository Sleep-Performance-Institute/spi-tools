const formatProgramChapter = require('./program-chapter')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    title: fields.title,
    disorderId: fields.disorder.sys.id,
    disorder: fields.disorder.fields.name,
    motivationId: fields.motivation.sys.id,
    chapters: fields.chapters.map(formatProgramChapter)
  }
}