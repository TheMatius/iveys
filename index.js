import express, { json } from 'express';

const app = express();

app.use(json());

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})