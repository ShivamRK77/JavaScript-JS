// console.log('Initialization complete', Temporal.Now.instant());

// const date = Temporal.PlainDate.from({ year: 2006, month: 8, day: 24 }); // => 2006-08-24
// date.year; // => 2006
// date.inLeapYear; // => false
// date.toString(); // => '2006-08-24'

// https://github.com/tc39/proposal-temporal

// https://tc39.es/proposal-temporal/docs/


// Dates

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString);

// console.log(typeof myDate);


//let myCreatedDate = new Date(2025, 0 , 24)
// let myCreatedDate = new Date(2025, 0 , 24 ,5 ,3)
// let myCreatedDate = new Date("2025-01-17")
let myCreatedDate = new Date("07-16-2025")


console.log(myCreatedDate.toLocaleString);

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${(newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long", 
    // timeZone:""

})
