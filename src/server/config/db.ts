import mongoose from 'mongoose'

const connectDb = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url)
    console.log('Database Connection Successfull')
  } catch (error) {
    console.error('Database connection Failed!', error)
  }
}

export default connectDb
