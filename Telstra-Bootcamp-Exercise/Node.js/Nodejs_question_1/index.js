const http=require('http');
const fs=require('fs');
const url = require( 'url' );
var jsonfile = require('jsonfile');    
var file = './database/messages.json'
const { parse}  = require('querystring');

const handler=(req,res)=>{
    if (req.method === 'POST') {
        let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        let parsed=parse(body)
        console.log(parsed)
        var name = parsed.name;
            var email = parsed.email;
            var message = parsed.message;

        
            var obj = { name: name , email: email, message: message }
            jsonfile.writeFileSync(file, obj, {flag: 'a'});
        res.end('your details has benn submitted');
    });
     
        
    }
    else{

    let filepath
    const parsedurl=url.parse(req.url,true)
    switch(parsedurl.pathname)
    {
        case '/':
            filepath='./asset/about.html'
        
            fs.readFile(filepath,(err,data)=>{
                if (err){
                    return res.end(err.message)
                }
                res.setHeader( 'Content-Type', 'text/html' );
                res.end( data );
            })
            break
        case '/contact':
            filepath='./asset/contact.html'
            fs.readFile(filepath,(err,data)=>{
                if (err){
                    return res.end(err.message)
                }
                res.setHeader( 'Content-Type', 'text/html' );
                res.end( data );
            })
            break

        


    }}
}
const server=http.createServer(handler);
const PORT=3000;
server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running on port ${PORT}`)
})