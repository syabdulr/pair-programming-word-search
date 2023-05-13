const transpose = (matrix) => {
  // Transpose a matrix by swapping rows with columns
  return matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );
};

const reverseString = (str) => {
  // Reverse a string by splitting it into an array of characters, reversing the array, and joining the characters back into a string
  return str.split('').reverse().join('');
};

const wordSearch = (letters, word) => {
  const numRows = letters.length;
  const numCols = letters[0].length;

  // Generate horizontal strings by joining the letters in each row of the grid
  const horizontalStrings = letters.map((row) => row.join(''));

  // Generate vertical strings by transposing the grid and joining the letters in each column
  const verticalStrings = transpose(letters).map((col) => col.join(''));

  // Generate diagonal strings
  const diagonalStrings = [];

  // Generate diagonal strings from the top-left corner to the bottom-right corner
  for (let row = 0; row < numRows; row++) {
    const diagonal = [];
    for (let i = 0; i < Math.min(numRows - row, numCols); i++) {
      diagonal.push(letters[row + i][i]);
    }
    diagonalStrings.push(diagonal.join(''));

    // Generate diagonal strings from the top-right corner to the bottom-left corner
    const reverseDiagonal = [];
    for (let i = 0; i < Math.min(numRows - row, numCols); i++) {
      reverseDiagonal.push(letters[row + i][numCols - 1 - i]);
    }
    diagonalStrings.push(reverseDiagonal.join(''));
  }

  // Generate diagonal strings from the bottom-left corner to the top-right corner
  for (let col = 0; col < numCols; col++) {
    const diagonal = [];
    for (let i = 0; i < Math.min(numCols - col, numRows); i++) {
      diagonal.push(letters[i][col + i]);
    }
    diagonalStrings.push(diagonal.join(''));

    // Generate diagonal strings from the bottom-right corner to the top-left corner
    const reverseDiagonal = [];
    for (let i = 0; i < Math.min(numCols - col, numRows); i++) {
      reverseDiagonal.push(letters[numRows - 1 - i][col + i]);
    }
    diagonalStrings.push(reverseDiagonal.join(''));
  }

  // Concatenate all the generated strings into a single array
  const allStrings = horizontalStrings
    .concat(verticalStrings)
    .concat(diagonalStrings);

  // Check if the word or its reverse is found in any string
  for (const str of allStrings) {
    if (str.includes(word) || reverseString(str).includes(word)) {
      return true;
    }
  }

  // If the word is not found, return false
  return false;
};

module.exports = wordSearch;
