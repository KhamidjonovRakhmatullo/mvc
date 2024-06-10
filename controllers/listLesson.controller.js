const modelAddLesson = require ("../models/addLesson.model")

const getListLesson = (req, res) => {
  const dataLesson = modelAddLesson.findAll()
  res.render("listLesson", { dataLesson });
};

module.exports = getListLesson;
