const fs = require ("fs")
const path = require("path")

const pathData = path.join(__dirname, "../data/userData.json") 


module.exports = class modelAddUser {
    constructor(uid,username, userage){
        this.uid = uid;
        this.username = username;
        this.userage = userage;
    }
    save(){
        let data = [];
        fs.readFile(pathData, "utf8", (err, item) => {
            if(err) throw err;
            data = JSON.parse(item)
            data.push({ uid: this.uid, username: this.username, userage: this.userage})
            console.log("readFile",data)

            fs.writeFile(pathData, JSON.stringify(data), (err) => {
                if(err) throw err;
                console.log("writeFile")
            })
        });
    }
    static findAll(){
       const item = ()=> fs.readFileSync(pathData, "utf8")
       return JSON.parse(item())
    }
}
