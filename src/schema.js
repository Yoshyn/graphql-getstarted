// Construct a schema, using GraphQL schema language
var { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    quoteOfTheDay: String
    random: Float!
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
    getString: String
    getMessage(id: ID!): Message
  }
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
  type Mutation {
    setString(message: String): String
    createMessage(input: MessageInput): Message
    createMessage2(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
  input MessageInput {
    content: String
    author: String
  }
  type Message {
    id: ID!
    content: String
    author: String
  }
`);

module.exports = schema;
