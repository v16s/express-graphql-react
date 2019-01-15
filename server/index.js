import '@babel/polyfill'
import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import config from 'config'
import Model from './models'
import log from 'roarr'
import schema from './graphql'
import path from 'path'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express()

app.use(express.static('dist'))

mongoose.connect(
  config.db_url,
  { useNewUrlParser: true }
)

const connection = mongoose.connection
connection.on('open', () => {
  log.info('connected to database')
})

const init = async () => {
  const server = new ApolloServer({ schema })
  const httpServer = createServer(app)

  await server.applyMiddleware({
    app
  })
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'))
  })
  httpServer.listen(config.port, () => {
    log.info('Listening on ' + config.port)
  })
}
init()
