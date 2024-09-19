const path=require('path');


//Base file name
// exact file path console.log('__filename);
console.log(path.basename(__filename));

// Direeectory name
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename));

// Create paht object

console.log(path.parse(__filename));

// to access path obect property
console.log(path.parse(__filename).base);

// Concatenate Paths
// ../test/hello.html

console.log(path.join(__dirname,'test','hello.html'));

