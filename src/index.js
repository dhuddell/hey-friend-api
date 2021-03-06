import express from 'express';
import cors from 'cors';
import Knex from 'knex';
import { Model } from 'objection';
require('dotenv').config();
import knexConfig from './knexfile.js'
import server from './graphql/schema';

const app = express();

 // graphql
server.applyMiddleware({ app });

// SQL
const knex = Knex(knexConfig);
Model.knex(knex);

// CORS
app.use(cors())
// app.use(cors({
//   origin: 'localhost:3000',
  // credentials: true,
// }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

export default app;
