const solvePuzzle = (input) => {
  const values = input.split(',').map(v => parseInt(v));

  const outputs = [];

  
  let i = 0;
  while (true) {
    const command = values[i].toString().padStart(5, '0');;
    
    const opCode = parseInt(command.slice(-2));
    
    const firstParamPositionMode = command[2] === '0';
    const secondParamPositionMode = command[1] === '0';
    const thirdParamPositionMode = command[0] === '0';
    
    switch (opCode) {
      case 1: { // Addition
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];
        values[values[i + 3]] = firstValue + secondValue;
        i += 4;

        break;
      }
      case 2: { // Multiplication
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];
        values[values[i + 3]] = firstValue * secondValue;
        i += 4;

        break;
      }
      case 3: { // Store input
        values[values[i + 1]] = OTHER_INPUT;
        i += 2;

        break;
      }
      case 4: { // Output
        const value = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        outputs.push(value);
        i += 2;

        break;
      }
      case 5: { // Jump if true
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];

        if (firstValue !== 0) {
          i = secondValue;
        } else {
          i += 3;
        }

        break;
      }
      case 6: { // Jump if false
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];

        if (firstValue === 0) {
          i = secondValue;
        } else {
          i += 3;
        }

        break;
      }
      case 7: { // Less than
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];
        
        if (firstValue < secondValue) {
          values[values[i + 3]] = 1;
        } else {
          values[values[i + 3]] = 0;
        }
        i += 4;

        break;
      }
      case 8: { // Equals
        const firstValue = firstParamPositionMode ? values[values[i + 1]] : values[i + 1];
        const secondValue = secondParamPositionMode ? values[values[i + 2]] : values[i + 2];
        if (firstValue === secondValue) {
          values[values[i + 3]] = 1;
        } else {
          values[values[i + 3]] = 0;
        }
        i += 4;

        break;
      }
      case 99: { // Halt
        return outputs[outputs.length - 1];
      }
        
    }
  }
}

const CORRECT_ANSWER = 15486302;
const INPUT = '3,225,1,225,6,6,1100,1,238,225,104,0,1102,45,16,225,2,65,191,224,1001,224,-3172,224,4,224,102,8,223,223,1001,224,5,224,1,223,224,223,1102,90,55,225,101,77,143,224,101,-127,224,224,4,224,102,8,223,223,1001,224,7,224,1,223,224,223,1102,52,6,225,1101,65,90,225,1102,75,58,225,1102,53,17,224,1001,224,-901,224,4,224,1002,223,8,223,1001,224,3,224,1,224,223,223,1002,69,79,224,1001,224,-5135,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,102,48,40,224,1001,224,-2640,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,1101,50,22,225,1001,218,29,224,101,-119,224,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1101,48,19,224,1001,224,-67,224,4,224,102,8,223,223,1001,224,6,224,1,223,224,223,1101,61,77,225,1,13,74,224,1001,224,-103,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,1102,28,90,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,7,226,677,224,102,2,223,223,1005,224,329,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,344,101,1,223,223,8,226,226,224,1002,223,2,223,1006,224,359,101,1,223,223,1008,677,226,224,1002,223,2,223,1005,224,374,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,389,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,404,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,419,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,434,101,1,223,223,1108,226,226,224,1002,223,2,223,1005,224,449,101,1,223,223,7,226,226,224,102,2,223,223,1005,224,464,101,1,223,223,108,677,226,224,102,2,223,223,1005,224,479,1001,223,1,223,1007,677,226,224,1002,223,2,223,1006,224,494,1001,223,1,223,1007,677,677,224,1002,223,2,223,1006,224,509,1001,223,1,223,107,677,677,224,1002,223,2,223,1005,224,524,101,1,223,223,1108,226,677,224,102,2,223,223,1006,224,539,1001,223,1,223,8,677,226,224,102,2,223,223,1005,224,554,101,1,223,223,1007,226,226,224,102,2,223,223,1006,224,569,1001,223,1,223,107,677,226,224,102,2,223,223,1005,224,584,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,599,1001,223,1,223,107,226,226,224,1002,223,2,223,1006,224,614,1001,223,1,223,1108,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,1107,677,677,224,102,2,223,223,1005,224,644,1001,223,1,223,1008,677,677,224,102,2,223,223,1005,224,659,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,674,101,1,223,223,4,223,99,226';
const OTHER_INPUT = 5;

const startDate = new Date();
const result = solvePuzzle(INPUT);
console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === CORRECT_ANSWER ? 'Test success' : 'Test fail');
console.log('Run time:', (new Date() - startDate)/1000, 'seconds');
console.log('\n---------------------');
