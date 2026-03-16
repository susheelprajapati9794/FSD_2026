import {Temporal } from '@js-temporal/polyfill';

let n= Temporal.Now.instant();
console.log(n);

// let date=new Temporal.PlainDate(2026, 2, 25);

// console.log(date.year);
// console.log(date.month);
// console.log(date.day);
    
// let newdate=date.add({days: 10});
// console.log(newdate);

// let time= Temporal.PlainTime('14:30:00');
// console.log(time.hour);
// console.log(time.minute);
// console.log(time.second);

// timeZone 
let zonedDateTime= Temporal.ZonedDateTime.from('2026-02-25T14:30:00[America/New_York]');
console.log(zonedDateTime.toString());

let utcDateTime= zonedDateTime.toInstant();
console.log(utcDateTime.toString());

// duration
let duration= Temporal.Duration.from({hours: 2, minutes: 30});
console.log(duration.toString());   
console.log("my name i9s")