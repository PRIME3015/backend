const fs=require('fs');
const path=require('path');

// create a folder

// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('Folder created Successfully');
// });

// create and write to file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),
//     'I love nodejs'
// ,err=>{
//   if (err) throw err;
//   console.log("File Written Successfully");
//   // to append the written code instere fo writeing code
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " There is no rest for me in this world perhaps in the next",
//     (err) => {
//       if (err) throw err;
//       console.log("File Written Successfully");
//     }
//   );
// });

// Read file

// fs.readFile(path.join(__dirname,'/test','hello.txt'),
// 'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// Rename File

fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed Successfully");
  }
);


