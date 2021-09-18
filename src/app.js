const express = require('express')
require('./db/mongoose')

const bookRouter = require('./routers/book')

const app = express()
app.use(express.json())
app.use(bookRouter)

app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(3000, () => {})