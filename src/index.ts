import * as express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
