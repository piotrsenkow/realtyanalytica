const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema'); // You will create this in the next steps

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enables the GraphiQL tool
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
