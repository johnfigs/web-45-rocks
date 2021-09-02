require('dotenv').config() //this allows to stash the "artificial env variables" in a gitignore file
const express = require('express')
const cors = require('cors')


console.log(process.env.LADY)
console.log(process.env.API_SECRET)


const PORT = process.env.PORT || 5000 //fallback for a missing port 

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('<h1>Web 45 ROCKS!</h1>')
})

server.get('/api', (req,res) => {
    res.json({message: 'Web 45 is awesome'})
})
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})