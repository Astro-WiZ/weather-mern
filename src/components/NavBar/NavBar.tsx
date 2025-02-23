import { useState } from 'react'
import logo from '../../client/assets/clear.png'
import { AddCity } from '../../client/api/api'
import './NavBar.css'
import { Weather } from '../../client/types/weather.types'

const NavBar = () => {
  const [cities, setCities] = useState<Weather[]>([])
  const [newCity, setNewCity] = useState('')

  const handleNewCity = async () => {
    if (newCity.trim()) {
      const city = await AddCity(newCity)
      setCities([...cities, city])
      setNewCity('')
    }
  }

  return (
    <div className="header">
      <div className="left-logo">
        <h1>Weather</h1>
        <img src={logo} alt="" className="weather-logo" />
      </div>

      <div className="search-bar">
        <input
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          type="text"
          placeholder="Enter a name of city"
        />
        <button className="add-button" onClick={handleNewCity}>
          Add
        </button>
      </div>
    </div>
  )
}

export default NavBar
