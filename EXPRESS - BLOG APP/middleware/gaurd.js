const gaurd = (req, res, next) =>{
    
    const password = req.query.password

    if(password != 54123){
        return res.send({
            message: "You are not authorised to do this operation"
        })
    }
    
    next()
}

module.exports = gaurd