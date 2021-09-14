require('dotenv/config')
const { Ion } = require('@ionapp/ion')
const { MONGO_URI, PORT } = process.env

Ion({ port: PORT, mongoUri: MONGO_URI })
