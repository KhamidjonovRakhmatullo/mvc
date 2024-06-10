const {Router} = require("express")
// const {dataProduct} =require("../routes/addProduct.route")
// const {dataProduct} =require ("../controllers/addProduct.controller");
const getListProduct = require("../controllers/listProduct.controller");

const router = Router();

router.get("/list-products", getListProduct)

module.exports = router