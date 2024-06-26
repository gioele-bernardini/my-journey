var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');

// Le operazioni sono eseguite IN SEQUENZA
console.log(data);
console.log('Program ended.');


// Guardiamo ora la programmazione ASINCRONA
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(error, data) {
  console.log(data);
});
console.log('Program ended.');




// BLOCKING vs NON-BLOCKING (here is blocking!)
const fs = require('fs');
const data = fs.readFileSync('/file.md');
// blocks here above until file is read

const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
}); // continue executing while waiting for the file


// ESEMPIO CON I TIMEOUT!
setTimeout( () => {
  console.log('1000ms'); // 1000ms
  setTimeout( () => {
    console.log('5000ms') // 5000ms
  }, 5000) // then, wait for another 5 seconds
}, 1000)
// il primo parametro e' la funzione di callback!