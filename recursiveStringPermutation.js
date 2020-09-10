function getPermutations(string) {
  // base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  // declare variable for all characters except last
  const allCharsExceptLast = string.slice(0, -1);
  // declare variable for the last character
  const lastChar = string[string.length - 1];

  // recursive call to get all permutations
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(
    (permutationsOfAllCharsExceptLast => {
      for (
        let position = 0;
        position <= allCharsExceptLast.length;
        position++
      ) {
        const permutation =
          permutationsOfAllCharsExceptLast.slice(0, position) +
          lastChar +
          permutationsOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    }
  );
}

// solution 2 -- WIP

function getPermutations(string) {
// declare variable set equal to empty array
  let permutations = new Set();

// if input length is equal to 0, add it to the set
  if (input.length === 0) {
    permutations.add(string);
  }

// iterate through the input
  for (let i = 0; i < input.length; i++) {
     // add input at index to string variable
    string += input[i];
  // return the function with the arguments of the current string and input that excludes the current character at the index
    return recursiveStringPermutation(input.slice(0, i).concat(input.slice(i + 1)), string)
  }

  return permutations;

}

const input1 = 'cats';
console.log(getPermutations(input1))

// solution 3 - WIP
function getPermutations(string) {
  let permutations = new Set();

  (function combinations(str, input) {
    if (input === '') { permutations.add(str)};

    for (let i = 0; i < input.length; i++) {
      combinations(str + str[i], input.slice(0, i) + input.slice(i + 1))
    }
  })('', string);

  return permutations;
}
