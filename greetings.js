const getFlag = require('./getFlag')

console.log(`Hey ${getFlag('--name')}. ${getFlag('--greeting')}`)