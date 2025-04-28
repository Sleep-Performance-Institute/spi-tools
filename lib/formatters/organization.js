module.exports = ({ fields, sys }) => {
    return {
      id: sys.id,
      name: fields.name,
      inviteCode: fields.inviteCode,
      logo: `https:${fields.logo.fields.file.url}`,
      background: `https:${fields.background.fields.file.url}`,
      banner: `https:${fields.banner.fields.file.url}`,
      description: fields.description,
      coachingUrl: fields.coachingUrl,
    }
  }