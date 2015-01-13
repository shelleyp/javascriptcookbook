var one = require ('./one');

module.exports = function(val) {
   one();
   console.log('hi ' + val + ' from two');
};
