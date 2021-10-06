const { runMigration } = require('contentful-migration')
const migrateMeditations = require('migrateMeditations')

const options = {
  migrateMeditations,
  spaceId: '<space-id>',
  accessToken: '<access-token>'
}

runMigration(options)
  .then(() => console.log('Migration done! 🪅🕺🏽✨'))
  .catch(e => console.error(e))