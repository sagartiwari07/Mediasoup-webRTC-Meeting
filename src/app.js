const express = require('express')

const app = express()
const https = require('httpolyglot')
const fs = require('fs')
const mediasoup = require('mediasoup')
const config = require('./config')
const path = require('path')
const Room = require('./Room')
const Peer = require('./Peer')

const options = {
    key: fs.readFileSync(path.join(__dirname,config.sslKey), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname,config.sslCrt), 'utf-8')
}

const httpsServer = https.createServer(options, app)