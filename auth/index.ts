import express from 'express';
import login from './routes/login'

const app = express();
const port = 4000;

app.use("/loginIn",login )



app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});