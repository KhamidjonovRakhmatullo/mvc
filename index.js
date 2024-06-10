const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
//calls
const addUserRoutes = require("./routes/addUser.route");
const listUserRoutes = require("./routes/listUser.route");
const addProductRoutes = require("./routes/addProduct.route");
const listProductRoutes = require( "./routes/listProduct.route")
const addLessonRoutes = require("./routes/addLesson.route")
const listLessonRoutes = require("./routes/listLesson.route")

const app = express();

//handlebars
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "views");

//for data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//css
app.use(express.static(path.join(__dirname, "public")));

//calls
//user
app.use("/forUsers", addUserRoutes.router);
app.use(listUserRoutes);
//product
app.use("/forProducts", addProductRoutes.router)
app.use(listProductRoutes)
//lesson
app.use("/forLesson",addLessonRoutes.router)
app.use(listLessonRoutes)

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});

//server Listen
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log("Server running on PORT: ", PORT);
});
