const createMeditation = (migration) => {
  const meditation = migration.editContentType('meditation')
    .editField('type')
      .name('type')
}

module.exports = createMeditation