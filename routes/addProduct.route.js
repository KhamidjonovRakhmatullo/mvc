const { Router } = require("express");
const {getAddProduct, postAddProduct} = require("../controllers/addProduct.controller");
const router = Router();
///
router.get("/add-products", getAddProduct );

// const dataProduct = [];

router.post("/postProducts", postAddProduct);

exports.router = router;
// exports.dataProduct = dataProduct;
