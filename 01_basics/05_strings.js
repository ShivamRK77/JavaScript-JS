const name = "Shivam"

const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName  = new String('ShivamRK77')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


 const newString = gameName.substring(0 , 4)
 console.log(newString);
 // we cannot use negative values in substring 

 const anotherString = gameName.slice(-8 ,4)
 console.log(anotherString);
 

const newStringOne = " Shivam     "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://hitesh.com/hitesh%20gupta"


console.log(url.replace('20' ,'-'))


console.log(url.includes('Sundar'))
console.log(url.includes('hit'));



console.log(gameName.split('-'));
