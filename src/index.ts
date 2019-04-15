import * as express from 'express';
import * as cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!!111fem');
});

app.get('/version', (req, res) => {
  res.send({ version: 1.3 });
});

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
