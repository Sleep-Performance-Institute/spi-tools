const formatQuestion = require('./question')
const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    headline: fields.headline,
    description: fields.description,
    image: `https:${fields.image.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    body: fields.body,
    cardImage: `https:${fields.cardImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    cardSmallHeadline: fields.cardSmallHeadline,
    cardBigHeadline: fields.cardBigHeadline,
    cardButtonHeadline: fields.cardButtonHeadline,
    question: fields.question && formatQuestion(fields.question)
  }
}