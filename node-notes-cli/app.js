const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, data) => {

  if (process.argv[2] === 'read') {
    const parsedData = JSON.parse(data);
    for (const key in parsedData.notes) {
      console.log(`${key}: ${parsedData.notes[key]}`);
    }
    if (err) throw err;
  } else if (process.argv[2] === 'create') {
    const obj = JSON.parse(data);
    obj.notes[obj.nextId] = process.argv[3];
    obj.nextId++;
    const result = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', result, err => {
      if (err) throw err;
      console.log('The note has been saved!');
    });
  } else if (process.argv[2] === 'delete') {
    const obj = JSON.parse(data);
    delete obj.notes[process.argv[3]];
    const result = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', result, err => {
      if (err) throw err;
      console.log('The note has been removed!');
    });
  } else if (process.argv[2] === 'update') {
    const obj = JSON.parse(data);
    obj.notes[process.argv[3]] = process.argv[4];
    const result = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', result, err => {
      if (err) throw err;
      console.log('The note has been updated!');
    });
  }
});
