let input = ['A whale of a deal!'];

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j < input[0].length; j++){
    for (let k = 0; k < vowels.length; k++){
      if (input[i][j].toLowerCase() === 'e'){
        resultArray.push('EE')
        break
      } else if(input[i][j].toLowerCase() === 'u'){
        resultArray.push('UU')
        break
      } else if (input[i][j] === vowels[k]){
        resultArray.push(vowels[k].toUpperCase())
      }
    }
  }
}

console.log(resultArray.join(''))
