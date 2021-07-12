import express, { json } from 'express';
import morgan from 'morgan';
import 'dotenv/config.js';

import router from './routes/index';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Works!');
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});