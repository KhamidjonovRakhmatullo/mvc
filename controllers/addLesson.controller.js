//imports
const modelAddLesson = require("../models/addLesson.model")
const uuid = require ("uuid")

//inputs
const getAddLesson = (req, res) => {
  res.render("addLesson");
};

//post method

const postAddLesson = (req, res) => {
  const uid = uuid.v4()
  const dataLesson = new modelAddLesson( uid,req.body.dars, req.body.rasm, req.body.vaqt)
  dataLesson.save()
  res.redirect("/list-lesson");
  // console.log(dataLesson);
};

module.exports = { getAddLesson, postAddLesson};
