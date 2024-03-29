import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticateUserService();

  const response = await authenticateUser.execute({
    email,
    password,
  });

  return res.json(response);
});

export default sessionsRouter;
