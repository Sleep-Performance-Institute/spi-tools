const formatProgramChapter = require('./program-chapter')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    label: fields.label,
    chapters: fields.chapters.map(formatProgramChapter)
  }
}