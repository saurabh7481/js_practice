const obj = {
  num: 10
}

const multiplyBy = function(arg){
  return this.num*arg;
}

const multiply = function(arg1, arg2, arg3){
  return this.num*arg1*arg2*arg3;
}

//call
console.log(multiplyBy.call(obj, 12));

//apply
const arr = [34,12,10];
console.log(multiply.apply(obj, arr));

//bind
const bound = multiply.bind(obj);
console.log(bound(3,6,2));

const Student = {
  age: 20
}

const printAge = function(){
  console.log(this.age);
}

const boundedFunc = printAge.bind(Student);
boundedFunc();

//currying using bind
const add = function(a, b){
  return a+b;
}

const currAdd = add.bind(this, 5);
console.log(currAdd(10));

//currying by closure
const add2 = function(a){
  return function(b){
    return a+b;
  }
}

const currAdd2 = add2(10);
console.log(currAdd2(20));
