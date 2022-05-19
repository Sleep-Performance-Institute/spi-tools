const formatProgramChapter = require('./program-chapter')
const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    assessmentButtonHeadline: fields.assessmentButtonHeadline,
    assessmentButtonCta: fields.assessmentButtonCta,
    assessmentButtonImage: `https:${fields.assessmentButtonImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    coachingButtonHeadline: fields.coachingButtonHeadline,
    coachingButtonImage: `https:${fields.coachingButtonImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    audioLibrary: fields.audioLibrary.map(formatProgramChapter)
  }
}