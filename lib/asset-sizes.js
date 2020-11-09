const FS_WIDTH = 500
const FS_HEIGHT = Math.ceil((16 / 9) * FS_WIDTH)
const OPTION_WIDTH = 500
const OPTION_HEIGHT = 500
const THUMB_WIDTH = 125
const THUMB_HEIGHT = 500

const makeContentfulSizingParams = (w = FS_WIDTH, h = FS_HEIGHT, fit = 'fill') => {
  return `w=${w}&h=${h}&fit=${fit}`
}

exports.CONTENTFUL_PARAMS = {
  FS: makeContentfulSizingParams(),
  OPTION: makeContentfulSizingParams(OPTION_WIDTH, OPTION_HEIGHT),
  THUMB: makeContentfulSizingParams(THUMB_WIDTH, THUMB_HEIGHT)
}