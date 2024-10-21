const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
//ERROR HANDLING MIDDLEWARE
app.use(errorHandler);


//ROUTES BELOW
app.get('/',(req,res)=> {
    res.send("working");
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})
