function makeIterator(array){
    var nextIndex = 0;
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var tasks = [{"task": function() {
                        console.log('hello from a');
                      }},
             {"task": function() {
                        console.log('hello from b');
                      }}];

var taskRunner = makeIterator(tasks);

var task = taskRunner.next();
console.log(task);
if (!task.done) task.value.task();

task = taskRunner.next();
console.log(task);
if (!task.done) task.value.task();

task = taskRunner.next();
console.log(task);
if(!task.done) task.value;
