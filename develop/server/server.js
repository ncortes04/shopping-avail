const express = require('express')
const app = express()
const db = require('./config/connection')
const userRoutes = require('./routes/index')
app.use("/users", userRoutes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("sdaddadasdsda")
})

db.once('open', function(){
    app.listen(3001)
    console.log("listening")
})