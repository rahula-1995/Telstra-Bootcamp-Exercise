const http=require('http');

const url = require( 'url' );

const { parse}  = require('querystring');

const handler=(req,res)=>{
  
    let filepath
    const parsedurl=url.parse(req.url,true)
    console.log(parsedurl)
    switch(parsedurl.pathname)
    {
        
        case '/add':
            var x=parseInt(parsedurl.query.x)
            var y=parseInt(parsedurl.query.y)
            var result=x+y
            res.write(`x= ${x}`);
            
            res.write(`y= ${y}`);
            res.write(`result=${result}`)
            res.end('Thank you')
            
            break
                case '/subtract':
                    var x=parseInt(parsedurl.query.x)
                    var y=parseInt(parsedurl.query.y)
                    var result=x-y
                    res.write(`x= ${x}`);
                    
                    res.write(`y= ${y}`);
                    res.write(`result=${result}`)
                    res.end('Thank you')
                    
                    break
                    case '/multiply':
                        var x=parseInt(parsedurl.query.x)
                        var y=parseInt(parsedurl.query.y)
                        var result=x*y
                        res.write(`x= ${x}`);
                        
                        res.write(`y= ${y}`);
                        res.write(`result=${result}`)
                        res.end('Thank you')
                        
                        break
                        case '/divide':
                            var x=parseInt(parsedurl.query.x)
                            var y=parseInt(parsedurl.query.y)
                            var result=x/y
                            res.write(`x= ${x}`);
                            
                            res.write(`y= ${y}`);
                            res.write(`result=${result}`)
                            res.end('Thank you')
                            
                            break
            case '/':
                res.end('welcome to arithimetic world')
            default:
                

                res.end('You are forbidden!');
       

        


    }
    res.end("gotcha")
    
        


    
}
const server=http.createServer(handler);
const PORT=3000;
server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running on port ${PORT}`)
})