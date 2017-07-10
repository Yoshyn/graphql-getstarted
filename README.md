# graphql-getstarted

Step from http://graphql.org/graphql-js/

RUN : node src/server.js

VISIT :

* http://localhost:4000/graphql?operationName=null&query={%0A%09getDie(numSides%3A 3) {%0A numSides%0A rollOnce%0A roll(numRolls%3A 5)%0A }%0A}%0A%0A&variables=
