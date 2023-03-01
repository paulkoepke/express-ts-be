import express from 'express'
import todos from './todo/todo.route'

const router = express.Router();

// router.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: 'API - 👋🌎🌍🌏',
//   });
// });

router.use('/todo', todos);

export default router;
