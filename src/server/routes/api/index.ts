import express from 'express';

let routes = express.Router();

routes.get('/user', (req, res) => {
  res.send('ths route should return User Data');
});

routes.get('/company', (req, res) => {
  res.send('ths route should return Company Data');
});

routes.get('/work', (req, res) => {
  res.send('ths route should return Work Data');
});
export default routes;
