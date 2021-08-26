/* exported reverseWords */

function reverseWords(string) {
  var words = string.split(' ');
  var wordArr;
  var reversedWordArr;
  var reverseWords;
  var secondWordArr = [];
  var finishedString = '';

  for (let i = 0; i < words.length; i++) {
    wordArr = words[i].split('');
    reversedWordArr = wordArr.reverse('');
    reverseWords = reversedWordArr.join('');
    secondWordArr.push(reverseWords);
    finishedString = secondWordArr.join(' ');
  }

  return finishedString;

}
