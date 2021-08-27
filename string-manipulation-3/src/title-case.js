/* exported titleCase */

function titleCase(title) {
  var wordsArr = title.split(' ');
  var words;

  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toLowerCase() + wordsArr[i].slice(1);
  }

  for (let j = 0; j < wordsArr.length; j++) {
    if (wordsArr[j] !== 'and' && wordsArr[j] !== 'or' && wordsArr[j] !== 'nor' && wordsArr[j] !== 'but' && wordsArr[j] !== 'a' && wordsArr[j] !== 'an' && wordsArr[j] !== 'the' && wordsArr[j] !== 'as' && wordsArr[j] !== 'at' && wordsArr[j] !== 'by' && wordsArr[j] !== 'for' && wordsArr[j] !== 'in' && wordsArr[j] !== 'of' && wordsArr[j] !== 'on' && wordsArr[j] !== 'per' && wordsArr[j] !== 'to') {
      wordsArr[j] = wordsArr[j].charAt(0).toUpperCase() + wordsArr[j].slice(1);
    }

    if (wordsArr[j] === 'Javascript' || wordsArr[j] === 'Javascript:') {
      wordsArr[j] = 'Java' + wordsArr[j].charAt(4).toUpperCase() + wordsArr[j].slice(5);
    }

    if (wordsArr[j] === 'Api') {
      wordsArr[j] = wordsArr[j].toUpperCase();
    }

    if (wordsArr[j].includes(':') === true) {
      for (let z = 0; z < wordsArr.length; z++) {
        wordsArr[z] = wordsArr[z].charAt(0).toUpperCase() + wordsArr[z].slice(1);
      }
    }

  }

  for (let y = 0; y < wordsArr.length; y++) {
    if (wordsArr[y] === 'For') {
      wordsArr[y] = wordsArr[y].charAt(0).toLowerCase() + wordsArr[y].slice(1);
    }
  }

  words = wordsArr.join(' ');

  console.log(words);
  return words;
}
