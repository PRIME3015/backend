import http from 'http';


http.createServer((req,res)=>{
    // write a response

    res.write('hello World');
    res.end();

}).listen(5000,()=>console.log('Sever is running....'));