let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');
let indexEasily = secretMessage.indexOf('easily');
secretMessage[indexEasily] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
let indexGet = secretMessage.indexOf('get');
let indexTime = secretMessage.indexOf('time,');
secretMessage.splice(indexGet, 5, 'know,');
console.log(secretMessage.join(' '));
