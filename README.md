# graphql-getstarted

Step from http://graphql.org/graphql-js/

RUN : node src/server.js

VISIT :

* http://localhost:4000/graphql?query={%20hello%20}

* http://localhost:4000/graphql?operationName=RollDiceWithVar&query=query%20RollDiceWithVar(%24dice%3A%20Int!%2C%20%24sides%3A%20Int)%20{%0A%20rollDice(numDice%3A%20%24dice%2C%20numSides%3A%20%24sides)%0A}%0A&variables={%20%22dice%22%3A%203%2C%20%22sides%22%3A%205%20}

* http://localhost:4000/graphql?operationName=null&query={%0A%09getDie(numSides%3A 3) {%0A numSides%0A rollOnce%0A roll(numRolls%3A 5)%0A }%0A}%0A%0A&variables=

* http://localhost:4000/graphql?operationName=RetrieveMessage&query=query RetrieveMessage {%0A getMessage%0A}%0Amutation UpdateMessage {%0A%09setMessage(message%3A "This is a test2")%0A}&variables=
