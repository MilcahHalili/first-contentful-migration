require('dotenv').config()
const { runMigration } = require('contentful-migration')
const migrateMeditation = require('migrateMeditations')

const options = {
  migrateMeditation,
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
  environmentId: process.env.ENVIRONMENT_ID
}

runMigration(options)
  .then(() => console.log('Migration done! 🪅🕺🏽✨'))
  .catch(e => console.error(e))