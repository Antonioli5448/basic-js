const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0
  let columnLength = matrix[0].length
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i] > 0 ){
      sum+= columnLength[i]
    }
    for(let h = 0; h<matrix.length ; h++){
      if (matrix[h][i] > 0){
        sum += matrix[h][i]
      }
    }

  }
  return sum 
}

module.exports = {
  getMatrixElementsSum
};
