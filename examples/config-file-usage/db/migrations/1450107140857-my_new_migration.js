const { User } = require('../models')

async function up () {
  await User.create({ firstName: 'Ada' });
}

async function down () {
  await User.deleteOne({ firstName: 'Ada' });
}

module.exports = {
  down,
  up
}