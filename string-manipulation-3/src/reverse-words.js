/* exported reverseWords */

function reverseWords(string) {
  var words = string.split(' ');
  var wordArr;
  var reversedWordArr;
  var reverseWords;

  for (let i = 0; i < words.length; i++) {
    wordArr = words[i].split('');
    reversedWordArr = wordArr.reverse('');
    reverseWords = reversedWordArr.join('');
    console.log(reverseWords);
  }

}
