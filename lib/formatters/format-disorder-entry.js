module.exports = ({ fields, sys }) => {
  return {
    id: sys.id,
    name: fields.name
  }
}