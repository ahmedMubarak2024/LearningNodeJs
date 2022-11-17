import express from 'express';
import routes from './routes/api';
const app = express();
const port = 5000;
app.use('/api', routes);
// app.get('/api', (req, res) => {
//   res.send('Hello, World');
// });

app.listen(port, () => console.log('Listening on port ${port}'));

export default app;
