const formatIntroSlide = require('./intro-slide')
const formatQuestion = require('./question')
const { CONTENTFUL_PARAMS } = require('../asset-sizes')

const formatQuestionGroup = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    questions: fields.questions.map(formatQuestion)
  }
}

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    introSlides: fields.introSlides.map(formatIntroSlide),
    assessmentSections: fields.questionGroups.map(formatQuestionGroup)
  }
}