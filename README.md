# graphql-getstarted

Step from http://graphql.org/graphql-js/

RUN : node src/server.js

VISIT :

* http://localhost:4000/graphql?operationName=null&query={%0A%09rollDice(numDice%3A 3%2C numSides%3A 2) %0A}%0A%0A&variables=
* http://localhost:4000/graphql?operationName=RollDiceWithVar&query=query RollDiceWithVar(%24dice%3A Int!%2C %24sides%3A Int) {%0A rollDice(numDice%3A %24dice%2C numSides%3A %24sides)%0A}%0A&variables={ "dice"%3A 3%2C "sides"%3A 5 }
