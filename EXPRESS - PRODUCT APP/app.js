const express = require('express')
const dns = require('node:dns')
const Product = require('./product.js')

const app = express()
app.use(express.json())

/** Making a post request to the given API end point "/getmeip" */
app.post('/getmeip', (req, res) => {

    const info = req.body
    const url = info.website_name

    dns.resolve4(url, (err, addresses) => {
        if (err) {
            throw err
        }else{
            res.status(200).send(addresses[0])
        }
    })
})


const product = new Product('products.json')


/** Create an Product */
app.post('/products/create', (req, res) => {

    const info = req.body

    product.addProduct(info)
   
    res.send({
        message: "Product has been added"
    })
})


/** Get all Products */
app.get('/products', (req, res) => {
    try {
        const products = product.getAll()

        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


/** Update an Product */
app.patch('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const info = req.body

    product.updateProduct(info,id)
    
    return res.status(200).send({
        message: 'Product updated successfully'
    })
})

/** Delete an Product */
app.delete('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    try {
        product.deleteProduct(id)

        return res.send({
            message: "Product has been deleted"
        })

    } catch(error) {

        res.status(500).send({
            message: error.message
        })
    }
})

/** Get Product by id */ 
app.get('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    const info = product.getById(id)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Product does not exist."
        })
    }

})


app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000')
})