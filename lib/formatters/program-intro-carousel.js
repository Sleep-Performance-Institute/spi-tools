const formatIntroSlide = require('./intro-slide')
const { CONTENTFUL_PARAMS } = require('../asset-sizes')

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    introSlides: fields.introSlides.map(formatIntroSlide),
    ctaBackground: `https:${fields.ctaBackground.fields.file.url}?${CONTENTFUL_PARAMS.FS}`,
    ctaBody: fields.ctaBody
  }
}