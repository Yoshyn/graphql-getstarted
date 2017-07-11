# graphql-getstarted

Step from http://graphql.org/graphql-js/

RUN : node src/server.js

VISIT :

* http://localhost:4000/graphql?query={%20hello%20}

* http://localhost:4000/graphql?operationName=RollDiceWithVar&query=query%20RollDiceWithVar(%24dice%3A%20Int!%2C%20%24sides%3A%20Int)%20{%0A%20rollDice(numDice%3A%20%24dice%2C%20numSides%3A%20%24sides)%0A}%0A&variables={%20%22dice%22%3A%203%2C%20%22sides%22%3A%205%20}

* http://localhost:4000/graphql?operationName=RandomDieQuery&query=query RandomDieQuery {%0A%09getDie(numSides%3A 3) {%0A %09%09numSides%0A %09%09rollOnce%0A %09%09roll(numRolls%3A 5)%0A }%0A}%0A%0A&variables=

* http://localhost:4000/graphql?operationName=RetrieveString&query=query RetrieveString {%0A getString%0A}%0Amutation UpdateString {%0A%09setString(message%3A "This is a test2")%0A}&variables=

* http://localhost:4000/graphql?operationName=GetMsg&query=mutation CreateMessage(%24input%3A MessageInput) {%0A createMessage(input%3A %24input) {%0A id%0A content%0A author%0A }%0A}%0A%0Aquery GetMsg {%0A getMessage(id%3A "67c54e7e6b1e861d9911") {%0A id%0A }%0A}&variables={ "input"%3A { "author"%3A "andy"%2C "content"%3A "hope is a good thing" } }
