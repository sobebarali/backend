const fs = require('fs')

/** Creating Logger Middleware  */
const logger = (req, res, next) =>{
    
    
    let method = req.method
    let url = req.url
    let userAgent = req.get('user-agent')

    
    let log = `${method}, ${url} ${userAgent}`
    console.log(log)


    
    fs.appendFile("logs.txt", log + "\n", err => {
        if (err) {
          console.log(err)
        }
      })

      next()
}

module.exports = logger