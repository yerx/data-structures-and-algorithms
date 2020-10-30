/*
 * strategy: keep track of characters that appear an odd
 * number of times. If there is more than one charater in
 * the set, the string permutation is not a palindrome.
 */

function hasPalindromePermutation(string) {
  // track charters that appear an odd number of times
  const unpairedCharacters = new Set();

  // iterate through the string
  for (let char of string) {
    // if the character is in the set, delete it
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      // else if the charater is not in the set add it
      unpairedCharacters.add(char);
    }
  }

  // if the set is greater than one, it is not a palindrome
  return unpairedCharacters.size <= 1;
}

const string1 = "yu";
console.log(hasPalindromePermutation(string1));

const string2 = "carar";
console.log(hasPalindromePermutation(string2));
