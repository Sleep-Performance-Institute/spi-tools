const { CONTENTFUL_PARAMS } = require('../asset-sizes')

const formatDayTimesQuestion = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    body: fields.body,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    sameTimeSnippet: fields.sameTimeSnippet
  }
}

const formatChooseOneQuestion = ({ fields, sys }) => {
  return {
    id: sys.id,
    prompt: fields.prompt,
    options: fields.options.map(formatChooseOneOption),
    showIf: fields.showIf ? fields.showIf.map(formatChooseOneOption) : [],
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

  return weights.map(({ fields, sys }) => ({
    id: sys.id,
    disorder: fields.disorder.sys.id,
    weight: fields.weight
  }))
}

module.exports = ({ fields, sys }) => {
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