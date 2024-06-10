const { Router } = require("express");
const { getAddLesson, postAddLesson } = require("../controllers/addLesson.controller");

const router = Router();

router.get("/add-lesson", getAddLesson);


router.post("/postLesson",postAddLesson );

module.exports = { router};
