const express = require('express')
const users = require('../data.json')
const controller = require('./controller')

const app = express()
const PORT = 4000


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to port 4000')
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find(element => {
        return element.id === +req.params.id
    })

    if(user){
        res.status(200).send(user)
    }else {
        res.status(404).send('user not found')
    }

    res.send(user)
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))