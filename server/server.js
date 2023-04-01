const express = require('express')
const app = express()
const db = require('./config/connection')
const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/itemRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api', categoryRoutes)
app.use('/api', userRoutes)
app.use('/api', itemRoutes)

db.once('open', () => {
    app.listen(3001)
    console.log("Listening")
})