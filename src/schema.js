// Construct a schema, using GraphQL schema language
var graphql = require('graphql');
var resolver = require('./resolver');

var RandomDieType = new graphql.GraphQLObjectType({
  name: 'RandomDie',
  fields: {
    numSides: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    rollOnce: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    roll: {
      type: new graphql.GraphQLList(graphql.GraphQLInt),
      args: {
        numRolls: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
      },
      resolve: resolver.roll
    },
  }
});

var Message = new graphql.GraphQLObjectType({
  name: 'Message',
  fields: {
    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
    content: { type: graphql.GraphQLString },
    author: { type: graphql.GraphQLString }
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: graphql.GraphQLString,
      resolve: resolver.hello
    },
    random: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
      resolve: resolver.random
    },
    rollDice: {
      type: new graphql.GraphQLList(graphql.GraphQLInt),
      args: {
        numDice: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        numSides: { type: graphql.GraphQLInt }
      },
      resolve: resolver.rollDice
    },
    getString: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      resolve: resolver.getString
    },
    getDie: {
      type: RandomDieType,
      args: {
        numSides: { type: graphql.GraphQLInt }
      },
      resolve: resolver.getDie
    },
    ip: {
      type: graphql.GraphQLString,
      resolve: resolver.ip
    },
    getMessage: {
      type: Message,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: resolver.getMessage
    }
  }
});

var MessageInput = new graphql.GraphQLInputObjectType({
  name: 'MessageInput',
  fields: {
    content: { type: graphql.GraphQLString },
    author: { type: graphql.GraphQLString },
  }
});

var mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    setString: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      args: {
        message: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
      },
      resolve: resolver.setString
    },
    createMessage: {
      type: Message,
      args: { input: { type: MessageInput } },
      resolve: resolver.createMessage
    },
    updateMessage: {
      type: Message,
      args: {
        id:    { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
        input: { type: MessageInput }
      },
      resolve: resolver.updateMessage
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType, mutation: mutationType});

module.exports = schema;
