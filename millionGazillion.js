class Trie {
  constructor() {
    this.rootNode = {};
  }

  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    // walk down the tree to check if the current node matches the input's character
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      // if the current node's char does not match the input's char set isNewWord to true
      if (!currentNode.hasOwnProperty(char)) {
        isNewWord = true;
        // set the current node at char equal to a new empty object
        currentNode[char] = {};
      }
      // set the current node to the current node at the char
      currentNode = currentNode[char];
    }

    if (!currentNode.hasOwnProperty("End of Word")) {
      isNewWord = true;
      currentNode["End of Word"] = {};
    }
    return isNewWord;
  }
}

const trie = new Trie();
console.log(trie.addWord("catch"));
console.log(trie.addWord("cakes"));
console.log(trie.addWord("cat"));
