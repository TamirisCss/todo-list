const today = new Date();

const weekDay = today.toLocaleString("default", { weekday: "long" }); 
console.log(weekDay);

const month = today.toLocaleString('default', { month: 'short' });
const day = today.getDate();
const year = today.getFullYear();

const hour = today.getHours();
const minutes = today.getMinutes();

const date = `${month} ${day}, ${year}`; 
const time =  `${hour}:${minutes}`;    
console.log(date);
console.log(time);