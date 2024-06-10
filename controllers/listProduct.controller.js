// const {dataProduct} = require("../controllers/addProduct.controller")
const modelAddProduct = require("../models/addProduct.model")

const getListProduct = (req, res)=> {
    const dataProduct = modelAddProduct.findAll()
    res.render("listProduct", {dataProduct})
}

module.exports = getListProduct