const fs = require("fs");
const path = require("path");

//path data
const pathData = path.join(__dirname, "../data/lessonData.json") 

//data saver
module.exports = class modelAddLesson {
    //constructors
  constructor(uid,dars, rasm, vaqt) {
    this.uid = uid;
    this.dars = dars;
    this.rasm = rasm;
    this.vaqt = vaqt;
  }
  //save
  save(){
    let data = []
    //readFile
    fs.readFile(pathData, "utf8", (err, item) => {
        if(err) throw err;
        data = JSON.parse(item)
        data.push({uid: this.uid, dars: this.dars,rasm: this.rasm, vaqt: this.vaqt})
        console.log("readFile", data)
        //writeFile
        fs.writeFile(pathData, JSON.stringify(data), (err)=> {
            if (err) throw err;
            console.log("writeFile")
        })
    })
  }
  static findAll(){
    const item =() => fs.readFileSync(pathData, "utf8");
    return JSON.parse(item())
  }
  
};
