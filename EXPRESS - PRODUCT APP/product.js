const fs = require("fs")

class Product {
  constructor() {
    this.path = "products.json"

    const content = fs.readFileSync(this.path, {
      encoding: "utf-8",
    })

    this.data = JSON.parse(content)
  }

  saveProduct() {
    const content = JSON.stringify(this.data, null, 2)

    fs.writeFileSync(this.path, content, {
      encoding: "utf-8",
    })
  }

  addProduct(info) {
    let id = 1

    const products = this.data.products

    products.forEach((product) => {
      if (id <= product.id) {
        id = product.id + 1
      }
    })

    info.id = id

    products.push(info)

    this.saveProduct()
  }

  updateProduct(info,id) {
    const products = this.data.products

    let index = null

    products.find((product, idx) => {
      if (product.id === id) {
        index = idx
      }

      return product.id === id
    })

    if (index == -1) {
      return res.status(404).send({
        message: "product not found"
      })
    }

    products[index] = info,id

    this.saveProduct()
  }

  deleteProduct(id) {
    let index = null

    const products = this.data.products

    products.find((product, idx) => {
      if (product.id === id) {
        index = idx
      }

      return product.id === id
    })

    if (index === null) {
      throw new Error("Employee does not exist")
    }

    products.splice(index, 1)

    this.data.products = products

    this.saveProduct()
  }

  getAll() {
    const products = this.data.products

    return products
  }

  getById(id) {
    const products = this.data.products

    const product = products.find((product) => product.id === id)

    return product
  }
}

module.exports = Product
