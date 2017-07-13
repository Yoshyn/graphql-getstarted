// The root provides a resolver function for each API endpoint

var RandomDie = require('./models/random_die');
var Message = require('./models/message');

var stored_string = '';

// When using buildSchema, we did not get the obj as first parameter.
// We need to take care of this now.

const resolver = {
  hello: (obj ,args, context) => {
    console.log('<obj>', obj, '</obj>');             // obj The previous object, which for a field on the root Query type is often not used.
    console.log('<args>', args, '</args>');          // args The arguments provided to the field in the GraphQL query.
    console.log('<context>', context, '</context>'); // context A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
    return 'Hello world!';
  },
  random: () => { return Math.random(); },
  rollDice: (_, {numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getDie:        (_, {numSides})     => { return new RandomDie(numSides || 6); },
  setString:     (_, {message})      => { stored_string = message; return message; },
  getString:     (_)                 => { return stored_string; },
  getMessage:    (_, {id})           => { return Message.getMessage({id}) },
  createMessage: (_, {input})        => { return Message.createMessage({input}) },
  updateMessage: (_, {id, input})    => { return Message.updateMessage({id, input}) },
  ip:            (_, _args, context) => { return context.ip; }
};

module.exports = resolver;
