import express, { Application, Request, Response } from 'express';

const app: Application = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Home',
  });
});

app.listen(port, () => {
  console.log(`running server at port ${port}`);
});

export default app;
