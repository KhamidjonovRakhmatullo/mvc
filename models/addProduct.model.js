const fs = require("fs");
const path = require("path");

//path to file
const pathData = path.join(__dirname, "../data/productData.json");

module.exports = class modelAddProduct {
       constructor(uid, mahsulot, narx) {
        this.uid = uid;
        this.mahsulot = mahsulot;
        this.narx = narx;
       }
       //save
       save() {
        let data = [];
        //readFile
        fs.readFile(pathData, "utf8", (err, item) => {
           if(err) throw err;
           data = JSON.parse(item);
           data.push({uid: this.uid, mahsulot: this.mahsulot, narx: this.narx})
           console.log("readFile", data) 
        //writeFile
           fs.writeFile(pathData, JSON.stringify(data), (err)=> {
            if(err) throw err;
            console.log("writeFile")
           })
        })
      }
      static findAll(){
        const item = () => fs.readFileSync(pathData, "utf8")
        return JSON.parse(item())
      }
};






