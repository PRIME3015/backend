const url=require('url');
const myUrl=new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized url
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain)

// console.log(myUrl.host);



// Host Name(it doesnot includes ports);

// console.log(myUrl.hostname);


// Pathname

// console.log(myUrl.pathname);


//Deserialized query

// console.log(myUrl.search);

//params object

// console.log(myUrl.searchParams);

//Add param
// myUrl.searchParams.append('abc','124');
// console.log(myUrl.searchParams);
// // Loop throught params

// myUrl.searchParams.forEach((value,name)=>{
//     console.log(`{name}:${value}`);

// })







