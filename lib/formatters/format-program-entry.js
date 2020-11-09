const { CONTENTFUL_PARAMS } = require('../asset-sizes')

const formatChapter = ({ fields, sys }) => {
  console.log(fields.readOnlyScript)
  return {
    id: sys.id,
    name: fields.name,
    audioDuration: fields.audioDuration,
    introduction: fields.introduction,
    readOnlyScript: fields.readOnlyScript,
    backgroundImage: `https:${fields.backgroundImage.fields.file.url}?${CONTENTFUL_PARAMS.OPTION}`,
    audioFile: `https:${fields.audioFile.fields.file.url}`
  }
}

module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    disorder: fields.disorder.sys.id,
    motivation: fields.motivation.sys.id,
    chapters: fields.chapters.map(formatChapter)
  }
}