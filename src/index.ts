import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(morgan('common'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Home',
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'this reote is not found plz respest the api route',
  });
});

app.listen(port, () => {
  console.log(`running server at port ${port}`);
});

export default app;
