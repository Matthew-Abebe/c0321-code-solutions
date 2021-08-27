/* exported titleCase */

function titleCase(title) {
  var wordsArr = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var words;

  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toLowerCase() + wordsArr[i].substring(1);
  }

  for (let j = 0; j < wordsArr.length; j++) {
    for (let m = 0; m < minorWords.length; m++) {
      if (wordsArr[j] !== minorWords[m]) {
        wordsArr[j] = wordsArr[j].charAt(0).toUpperCase() + wordsArr[j].substring(1);
      }
    }
  }

  words = wordsArr.join(' ');

  console.log(words);
}
