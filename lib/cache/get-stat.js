var npm = require('../npm.js')
var mkdirp = require('mkdirp')

module.exports = function getCacheStat (cb) {
  mkdirp(npm.cache, function (er) {
    if (er) return cb(er)
    var fs = require('graceful-fs')
    fs.stat(npm.cache, cb)
  })
}
