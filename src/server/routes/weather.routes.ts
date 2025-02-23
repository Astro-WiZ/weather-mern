import { Router } from 'express'
import {
  addCity,
  deleteCity,
  getCity,
  updateCity,
} from '../controllers/weather.controller'

const weatherRouter = Router()

weatherRouter.get('/', getCity)
weatherRouter.post('/', addCity)
weatherRouter.put('/"id', updateCity)
weatherRouter.delete('/:id', deleteCity)

export default weatherRouter
