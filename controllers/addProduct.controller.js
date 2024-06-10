const modelAddProduct = require ("../models/addProduct.model")
const uuid = require("uuid")
///
//inputs
const getAddProduct = (req, res) => {
    res.render("addProduct");
  }

///data
// const dataProduct = [];

//post method
const postAddProduct = (req, res) => {
    // dataProduct.push({ mahsulot: req.body.mahsulot, narx: req.body.narx });
    const uid = uuid.v4()
    const dataProduct = new modelAddProduct(uid, req.body.mahsulot, req.body.narx )
    dataProduct.save()
    res.redirect("/list-products");
    // console.log("pooooost", dataProduct)///shows last add infos
  }

  module.exports = { getAddProduct, postAddProduct,} 
  //   module.exports = { getAddProduct, postAddProduct, dataProduct} ///data to listProduct controller