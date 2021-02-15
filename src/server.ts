import express from "express"
import { ApolloServer, gql } from "apollo-server-express"

const typeDefs = gql`
  type Query {
    teste: String
  }
`
const resolvers = { Query: { teste: () => "hello graphql" } }

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.use((req, res) => {
  res.status(200)
  res.send("Hello!")
  res.end()
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
