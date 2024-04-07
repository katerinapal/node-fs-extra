'use strict'

const u = require('universalify').fromCallback
module.exports = {
  copy: u(require('./copy')),
  copySync: require('./copy-sync')
  //copySync: require('./copy-sync').copySync,

  //UPD
  //exporting getStats() to be able to generate unit tests
  //getStats: require('./copy-sync').getStats
}
