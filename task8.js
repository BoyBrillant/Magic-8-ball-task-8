const userName= "Amir";
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
let userQuestion="Am I the last person alive?"
console.log(`${userName} asked, ${userQuestion}`);
let randomNumber= Math.floor(Math.random()*8);
let eightBall='';

if (randomNumber===0){
  eightBall= 'It is Certain'
}
else if (randomNumber===1) {
  eightBall= "is decidedly so"
}
else if (randomNumber===2) {
  eightBall="Reply hazy try again"
}
else if (randomNumber===3) {
  eightBall="Cannot predict now"
}
else if (randomNumber===4) {
  eightBall="Do not count on it"
}
else if (randomNumber===5) {
  eightBall="My sources say no"
}
else if (randomNumber===6) {
  eightBall="Outlook not so good"
}
else if (randomNumber===7) {
  eightBall="Signs point to yes"
}
console.log(eightBall);
