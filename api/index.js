const express = require('express')
import bodyParser from 'body-parser'

const app = express()
const PORT = 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Server is live')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})