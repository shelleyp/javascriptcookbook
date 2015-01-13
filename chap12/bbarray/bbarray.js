var util = require('util');

(function(global) {
     'use strict';

     var bbarray = {};

     bbarray.concatArray = function (str, array) {
         if (!util.isArray(array) || array.length === 0) {
             return -1;
         } else if (typeof str != 'string') {
             return -1;
         } else {
             return array.map(function(element) {
               return str + ' ' + element;
             });
         }
     };
        

     bbarray.splitArray = function (str,array) {
         if (!util.isArray(array) || array.length === 0) {
             return -1;
         } else if (typeof str != 'string') {
             return -1;
         } else {
             return array.map(function(element) {
               var len = str.length + 1;
               return element.substring(len);
             });
         }
      };

     if (typeof module != 'undefined' && module.exports) {
        module.exports = bbarray;
     } else if ( typeof define === 'function' && define.amd ) {
         define( 'bbarray', [], function() {
            return bbarray;
         });
     } else {
        global.bbarray = bbaarray;
     } 
     
}(this));

