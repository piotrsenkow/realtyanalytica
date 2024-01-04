// server.js
const express = require('express');
const { postgraphile } = require('postgraphile');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3002;

// PostgreSQL connection string
const DATABASE_URL = 'postgresql://piotr:2050@localhost:5432/mred3?sslmode=disable';

// Enable CORS for your Next.js app domain
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your Next.js app's domain
  credentials: true
}));

// PostGraphile middleware
app.use(
  postgraphile(DATABASE_URL, 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
