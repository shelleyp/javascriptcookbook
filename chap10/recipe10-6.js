'use strict';

function* taskRunner() {
   console.log('doing something');
   yield function () {
     console.log('hello from a');
   };
   console.log('doing something after a');
   yield function() {
     console.log('hello from b');
   }
   console.log('doing something after b');
}

var tasks = taskRunner();

tasks.next().value();
tasks.next().value();
tasks.next();

