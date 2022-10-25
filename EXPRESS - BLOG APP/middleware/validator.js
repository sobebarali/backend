/** Creating Validate Middleware  */
const validator = (req, res, next) =>{
    
    const info = req.body

    
    if(!info.id){
        return res.status(400).send("id required")
    }else{
        if(typeof(info.id) != "number"){
            return res.status(400).send("id should be Number")
        }
    }

    if(!info.title){
        return res.status(400).send("title required")
    }else{
        if(typeof(info.title) != "string"){
            return res.status(400).send("title should be String")
        }
    }

    if(!info.content){
        return res.status(400).send("content required")
    }else{
        if(typeof(info.content) != "string"){
            return res.status(400).send("content should be String")
        }
    }

    if(!info.author){
        return res.status(400).send("author required")
    }else{
        if(typeof(info.author) != "string"){
            return res.status(400).send("author should be String")
        }
    }


    next()
}

module.exports = validator