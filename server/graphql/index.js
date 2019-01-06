import Sample from 'models'
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql

// document type
let sample = new GraphQLObjectType({
  name: 'Sample',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})

// what all fields the query can contain
let query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    sample: {
      type: sample,
      args: {
        id: { type: GraphQLString },
        action: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve (parent, args) {
        // returns what it finds in the database
        return Sample.findById({ _id: args.id })
      }
    }
  }
})

// exporting the query as the entire schema
export default new GraphQLSchema({
  query: query
})
