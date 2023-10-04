import express from 'express';
import { router } from './module/aluno/aluno.route';

const app = express();
app.use(express.json());

app.use('/aluno', router);

app.listen(8080, () => {
  console.log('Server running on port 8080!');
});
