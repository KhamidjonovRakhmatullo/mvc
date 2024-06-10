const { Router } = require("express");
const { getListUser } = require("../controllers/listUser.controller");
///
const router = Router();

router.get("/", getListUser);

module.exports = router;
