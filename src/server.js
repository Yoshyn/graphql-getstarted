var express = require('express');
var graphqlHTTP = require('express-graphql');

var schema = require('./schema');

function loggingMiddleware(req, res, next) {
  console.log('<req.ip>', req.ip, '</req.ip>');
  next();
}

var app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
