const express = require('express');
const connectDB = require('./config/dbConnect');
const passport = require('passport');
const app = express();
require('dotenv').config();

connectDB();
app.use(express.json());
app.use(passport.initialize());
app.use("/user",require("./routes/user"));
app.use("/postes",require("./routes/Poste"))
app.use("/calls",require("./routes/call"))



const PORT = process.env.PORT;

app.listen(PORT,(err)=>err ? console.log(err):console.log(`server is running on ${PORT}`));