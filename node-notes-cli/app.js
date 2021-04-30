const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  // Write result back into data.json
  if (process.argv[2] === 'create') {
    // Parse obj
    const obj = JSON.parse(data);
    // Modify Obj
    obj.notes[obj.nextId] = process.argv[3];
    // Increment obj.nextId
    obj.nextId++;
    // Stringify obj
    const result = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', result, err => {
      if (err) throw err;
      console.log('The note has been saved!');
    });
  } else if (process.argv[2] === 'remove') {
    // Parse obj
    const obj = JSON.parse(data);
    // Modify Obj
    delete obj.notes[process.argv[3]];
    // Stringify obj
    const result = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', result, err => {
      if (err) throw err;
      console.log('The note has been removed!');
    });
  }
});
