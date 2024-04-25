const counterPlus = () => {
   let counter = 0;

   return function () {
      return ++counter;
   };
};

const counterFirst = counterPlus();
const counterSecond = counterPlus();

console.log('counterFirst : ' + counterFirst());
console.log('counterFirst : ' + counterFirst());
console.log('counterFirst : ' + counterFirst());
console.log('counterFirst : ' + counterFirst());
console.log('counterFirst : ' + counterFirst());

console.log('second : ' + counterSecond());
console.log('second : ' + counterSecond());
console.log('second : ' + counterSecond());
