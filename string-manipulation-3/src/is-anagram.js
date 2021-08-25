/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const splitFirstString = firstString.split('');
  const splitSecondString = secondString.split('');
  const firstStrArr = splitFirstString.sort();
  const secondStrArr = splitSecondString.sort();
  const firstStr = firstStrArr.join('');
  const secondStr = secondStrArr.join('');
  const firstStrNoSpace = firstStr.replace(' ', '');
  const secondStrNoSpace = secondStr.replace(' ', '');
  const stringOne = firstStrNoSpace.trim();
  const stringTwo = secondStrNoSpace.trim();
  let isAnagram = false;

  if (stringOne === stringTwo) {
    isAnagram = true;
  }

  return isAnagram;
}
