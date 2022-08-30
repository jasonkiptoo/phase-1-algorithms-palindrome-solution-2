function isPalindrome(word){
  let checkedWord=word.toLowerCase();
  let reversedWord=checkedWord.split('').reverse().join('')

  return (word===reversedWord)?true:false
}


/* 
  Add your pseudocode here
  change the word first to lowercase
  reverse the word and decalre it as reveresed word
  check whether the revered word === to the word arguement
  return true if so???
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
