/* exported isPalindromic */

function isPalindromic(string) {
  const splitString = string.split('');
  const reverseArr = splitString.reverse();
  const reverseString = reverseArr.join('');
  const newString = reverseString.replace(' ', '');
  const str = string.replace(' ', '');
  let isPalindromic = false;

  if (str === newString) {
    isPalindromic = true;
  }

  return isPalindromic;
}
