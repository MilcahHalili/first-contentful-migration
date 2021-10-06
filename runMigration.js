const { runMigration } = require('contentful-migration')
const migrateMeditation = require('migrateMeditations')

const options = {
  migrateMeditation,
  spaceId: '<space-id>',
  accessToken: '<access-token>'
}

runMigration(options)
  .then(() => console.log('Migration done! 🪅🕺🏽✨'))
  .catch(e => console.error(e))