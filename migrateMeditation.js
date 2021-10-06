const createMeditation = (migration, context) => {
  const meditation = migration.createContentType('meditation')
  const type = meditation.createField('type')
  type.type('Symbol').required(true)
}

module.exports = createMeditation