import express from 'express';
import routes from './routes/api';
const app = express();
const port = 5000;
const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  let url = req.url;
  console.log('${url}');
  next();
};
app.use(logger);
app.use('/api', routes);
// app.get('/api', (req, res) => {
//   res.send('Hello, World');
// });

app.listen(port, () => console.log('Listening on port ${port}'));

export default app;
