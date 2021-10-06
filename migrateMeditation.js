const createMeditation = (migration, context) => {
  const meditation = migration.editContentType('meditation')
    .name('Meditation')
    .editField('type').type('Symbol').name('Type')
}

module.exports = createMeditation