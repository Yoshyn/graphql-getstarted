// Construct a schema, using GraphQL schema language
var { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    quoteOfTheDay: String
    random: Float!
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

module.exports = schema;

