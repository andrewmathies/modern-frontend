const express = require('express')
const uniqid = require('uniqid')
require('log-timestamp')

const app = express()
const port = 3005

players = [
    {
        id: uniqid(),
        name: "Joseph Marquez",
        tag: "Mango",
        twitch: "https://www.twitch.tv/mang0"
    }, 
    {
        id: uniqid(),
        name: "William Hjelte",
        tag: "Leffen",
        twitch: "https://www.twitch.tv/leffen"
    }
]

console.log(players)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/api/players', (req, res) => { 
    console.log('request for players')

    res.json(players)
})

app.get('/api/players/:playerID', (req, res) => {
    console.log('request for', req.params.playerID)

    for (i in players) {
        player = players[i]
        if (player.id === req.params.playerID) {
            res.json(player)
            return
        }
    }

    res.error("No such player")
})

app.listen(port, () => {
	console.log('starting server on port ' + port)
})
