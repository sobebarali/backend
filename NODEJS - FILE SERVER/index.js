const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url == '/favicon.ico') {
        res.statusCode = 204
    }else{
        let path = "." + req.url

        fs.readdir(path, (err,datas) => {
            if(err){
                const content = fs.readFileSync(path.toString())
                res.end(content)
            }else{
                let result = ''
                if (datas.length == 0) {
                    result += "<h2>No Data found</h2>"
                    res.end(result);
                }
                datas.forEach((data) => {
                    result += (`<button style="font-size : 30px"><a href = ${data + "/"}>${data}</a></button><br/><br/>`)
                })
                res.end(`<h1>Current directory</h1><hr/><br/>`+result)
            }
        })
    } 
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server is running at port: "+ PORT);
});