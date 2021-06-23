function getPINs(observed) {
  // TODO: This is your job, detective!
  let result = [];
  let input = [];
  
  let adjacentDigits = [];
  
  for(let i = 0; i < observed.length; i++){
    adjacentDigits = getAdjacentDigits(observed[i]);
    result = generateString(result, adjacentDigits);
  }
  
  return result;
}

function generateString(input, adjacentDigits) {
  let result = [];
  let k = 0;
  if(input.length > 0){
    for(let i = 0 ; i < input.length; i++){
      for(let j = 0; j < adjacentDigits.length; j++){
        result[k] = input[i].toString() + adjacentDigits[j].toString();
        k++;
      }
    }
  } else {
    for(let j = 0; j < adjacentDigits.length; j++){
      result[k] = adjacentDigits[j].toString();
      k++;
    }
  }
  
  return result;
}

function getAdjacentDigits(digit){
  switch (digit){
      case '1' : {
        return [1, 2, 4];
      }
      case '2' : {
        return [1, 2, 3, 5];
      }
      case '3' : {
        return [3, 2, 6];
      }
      case '4' : {
        return [4, 1, 5, 7];
      }
      case '5' : {
        return [5, 4, 2, 6, 8];
      }
      case '6' : {
        return [6, 3, 5, 9];
      }
      case '7' : {
        return [7, 4, 8];
      }
      case '8' : {
        return [8, 7, 5, 9, 0];
      }
      case '9' : {
        return [9, 6, 8];
      }
      case '0' : {
        return [0, 8];
      }
  }
}
