let userName = 'Jane';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'What would you ask of the Magic Eight Ball?';

userName ? console.log(`Hello ${userName}, ${userQuestion}`) : console.log(`${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

eightBall = ''
/*
switch(randomNumber){
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decided so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
};

console.log(eightBall)
*/


if (randomNumber === 0){
    eightBall = 'It is certain'
}else if (randomNumber === 1){
    eightBall = 'It is decided so'
}else if (randomNumber === 2){
    eightBall = 'Reply hazy try again'
}else if (randomNumber === 3){
    eightBall = 'Cannot predict now'
}else if (randomNumber === 4){
    eightBall = 'Do not count on it'
}else if (randomNumber === 5){
    eightBall = 'My sources say no'
}else if (randomNumber === 6){
    eightBall = 'Outlook not so good'
}else if (randomNumber === 7){
    eightBall = 'Signs point to yes'
};

console.log(eightBall)
