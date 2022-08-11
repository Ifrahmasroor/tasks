const theList =['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
let addItem = function(num){
    theList.unshift(num);
};
let getIem = function(num){
    return theList.shift();
};
addItem("First");
console.log(theList);
console.log(getIem());
console.log(theList.slice(1,2));
addItem("last");
addItem("hello world");
addItem("Middle");
console.log(theList.splice(0,3));