require("dotenv").config(); // to access values written in .env file
const app=require("./src/app");
const connectDB=require("./src/db/db.js");

app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
})

connectDB();