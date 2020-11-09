const { CONTENTFUL_PARAMS } = require('../asset-sizes')

const formatIntroSlide = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`
  }
}

const formatQuestionGroup = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    questions: fields.questions.map(formatQuestion)
  }
}

const formatQuestion = ({ fields, sys }) => {
  const type = sys.contentType.sys.id

  let data = {}
  switch (type) {
    case 'questionChooseOne':
      data = formatChooseOneQuestion({ fields, sys })
      break
    case 'questionDayTimes':
      data = formatDayTimesQuestion({ fields, sys })
      break
    default:
      break
  }

  return {
    id: sys.id,
    type,
    ...data    
  }
}

const formatDayTimesQuestion = ({ fields, sys }) => {
  return {
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    sameTimeSnippet: fields.sameTimeSnippet
  }
}

const formatChooseOneQuestion = ({ fields, sys }) => {
  return {
    prompt: fields.prompt,
    options: fields.options.map(formatChooseOneOption)
  }
}

const formatChooseOneOption = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    endsSection: !!fields.endsSection,
    nextStepId: fields.nextStep && fields.nextStep.sys.id,
    weights: formatChooseOneQuestionWeight(fields.weights)
  }
}

const formatChooseOneQuestionWeight = (weights) => {
  if (!Array.isArray(weights)) return []

  return weights.map(({ fields }) => ({
    disorder: fields.disorder.sys.id,
    weight: fields.weight
  }))
}

module.exports = entry => {
  return {
    introSlides: entry.fields.introSlides.map(formatIntroSlide),
    assessmentSections: entry.fields.questionGroups.map(formatQuestionGroup)
  }
}