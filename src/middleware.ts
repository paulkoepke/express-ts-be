import { type NextFunction, type Request, type Response } from 'express'
export function notFound (req: Request, res: Response, next: NextFunction) {
  res.status(404)
  res.json({
    message: 'Not found'
  })
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`)
  next(error)
}
