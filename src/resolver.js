// The root provides a resolver function for each API endpoint

var RandomDie = require('./models/random_die');
var Message = require('./models/message');

var stored_string = '';

const resolver = {
  hello:         () => { return 'Hello world!'; },
  quoteOfTheDay: () => { return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'; },
  random:        () => { return Math.random(); },
  rollDice: function ({numDice, numSides}) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getDie:        ({numSides})  => { return new RandomDie(numSides || 6); },
  setString:     ({message})   => { stored_string = message; return message; },
  getString:     ()            => { return stored_string; },
  getMessage:    ({id})        => { return Message.getMessage({id}) },
  createMessage: ({input})     => { return Message.createMessage({input}) },
  updateMessage: ({id, input}) => { return Message.updateMessage({id, input}) }
};

module.exports = resolver;
