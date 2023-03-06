import express from 'express'
import todos from './todo/todo.route'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

router.use('/todo', todos)

export default router
