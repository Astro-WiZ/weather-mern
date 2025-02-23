import axios from 'axios'
import { Weather } from '../types/weather.types'

const API_URL = 'http://localhost:3000/api/location'

export const GetCity = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const AddCity = async (location: string): Promise<Weather> => {
  const response = await axios.post(API_URL, { location })
  return response.data
}

export const UpdateCity = async (id: string, location: string): Promise<Weather> => {
  const response = await axios.put(`${API_URL}/${id}`, { location, id })
  return response.data
}

export const DeleteCity = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`)
}
