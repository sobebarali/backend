const fs = require('fs');


let operation = process.argv[2];
let fileName = process.argv[3];


if(operation == 'read'){
    fs.readFile(fileName, {
        encoding: 'utf-8'
    },(err,data)=>{
        if(err)
            throw err;

        console.log(data);
    })
}else if(operation == 'delete'){
    fs.unlink(fileName, (err) =>{
        if(err){
            throw err;
        }else{
            console.log("\nDeleted file: " + fileName);
        }
    })
}else if(operation == 'create'){
    fs.open(fileName, 'w', (err) =>{
        if(err){
            throw err;
        }else{
            console.log("\nCreated file: " + fileName)
        }
    })
}else if(operation == 'append'){
    let CONTENT = process.argv[3];
    let fileName = process.argv[4];
    fs.appendFile(fileName, CONTENT, (err) =>{
        if(err){
            throw err;
        }else{
            console.log("\nAppended Value: " + CONTENT);
        }
    } )
}else if(operation == 'rename'){
    let newFileName = process.argv[4];
    fs.rename(fileName,newFileName, (err)=>{
        if(err){
            throw err;
        }else{
            console.log("\nFile Renamed to: " + newFileName);
        }
    })
}else if(operation == 'list'){
    let path = process.argv[3];
    fs.readdir("./" || path, (err,filename) =>{
        if(err){
            throw err;
        }else{
            console.log(filename);
        }
    })
}else{
    throw err;
}
