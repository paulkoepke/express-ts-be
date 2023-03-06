import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    hello: 'hello'
  })
})
router.post('/', (req, res) => {
  const data = req.body
  res.send('Data Received: ' + JSON.stringify(data))
})
export default router
