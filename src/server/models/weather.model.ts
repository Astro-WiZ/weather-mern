import mongoose, { Document, Schema } from 'mongoose'

export interface IWeather extends Document {
  location: string
}

const weatherSchema = new Schema<IWeather>({
  location: {
    type: String,
    required: true,
  },
})

const Weather = mongoose.model<IWeather>('Weather', weatherSchema)

export default Weather
