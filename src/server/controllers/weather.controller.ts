import { Request, Response } from 'express'
import Weather, { IWeather } from '../models/weather.model'

export const getCity = async (_req: Request, res: Response) => {
  const cities: IWeather[] = await Weather.find({})
  res.json(cities)
}

export const addCity = async (req: Request, res: Response) => {
  try {
    const { location } = req.body
    const newCity = new Weather({ location })
    newCity.save()
    res.status(201).json(newCity)
  } catch (error) {
    console.error('Failed to add city', error)
  }
}

export const updateCity = async (req: Request, res: Response) => {
  const updatedCity = await Weather.findByIdAndUpdate(
    req.params.id,
    { location },
    { new: true }
  )
  res.json(updatedCity)
}

export const deleteCity = async (req: Request, res: Response) => {
  await Weather.findByIdAndDelete(req.params.id)
  res.json({ message: 'Successfully deleted' })
}
