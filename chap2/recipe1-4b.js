var mArray = [];
mArray[0] = ['apple','pear'];
mArray[1] = ['strawberry','lemon'];
mArray[2] = ['lime','peach','berry'];

var nArray = mArray.slice(1,2);
console.log(mArray[1]); // ['strawberry','lemon']

nArray[0][0] = 'raspberry';
console.log(nArray[0]); // ['raspberry','lemon']
console.log(mArray[1]); // ['raspberry','lemon']
