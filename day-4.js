const solvePuzzle = (input) => {
  const [ start, end ] = input.split('-').map(n => parseInt(n));

  const res = [];

  let i = start;
  while (true) {
    if (twoAdjacentDigitsSame(i)
      && dontDecrese(i)) {
        
      res.push(i);
    }

    i++;
    if (i > end) break;
  }
  
  return res.length;
}

const twoAdjacentDigitsSame = (code) => {
  const codeAsString = code.toString();
  for (var i = 0; i < 5; i++) {
    if (codeAsString[i] === codeAsString[i + 1]) {
      return true;
    }
  }
}

const dontDecrese = (code) => {
  const parts = code.toString().split('').map(n => parseInt(n));
  for (var i = 0; i < 5; i++) {
    if (parts[i] > parts[i + 1]) return false;
  }
  return true;
}

const CORRECT_ANSWER = 454;
const INPUT = '402328-864247';

const startDate = new Date();
const result = solvePuzzle(INPUT);
console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === CORRECT_ANSWER ? 'Test success' : 'Test fail');
console.log('Run time:', (new Date() - startDate)/1000, 'seconds');
console.log('\n---------------------');
