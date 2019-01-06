import '@babel/polyfill'
import hapi from 'hapi'
import mongoose from 'mongoose'
import config from 'config'
import Model from './models'
import schema from './graphql'
import path from 'path'
import { ApolloServer, gql } from 'apollo-server-hapi'

mongoose.connect(
  config.db_url,
  { useNewUrlParser: true }
)

const connection = mongoose.connection
connection.on('open', () => {
  console.log('connected to database')
})

const init = async () => {
  const server = new ApolloServer({ schema })
  const app = hapi.server({
    port: config.port,
    routes: {
      files: {
        relativeTo: path.join(__dirname, '..', 'dist')
      }
    }
  })
  await app.register(require('inert'))

  app.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: path.join(__dirname, '..', 'dist'),
        index: ['index.html', 'default.html']
      }
    }
  })
  await server.applyMiddleware({
    app
  })

  await server.installSubscriptionHandlers(app.listener)
  await app.start()
  console.log('server running at', config.port)
}
init()
