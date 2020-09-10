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
    (permutationsOfAllCharsExceptLast) => {
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
