const { Router } = require("express");
const getListLesson = require("../controllers/listLesson.controller");


const router = Router();

router.get("/list-lesson", getListLesson);

module.exports = router;
