// import { useState } from 'react'
import Map from './map.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <h1>Leaflet Map</h1>
      <div className="centerMap">
       <Map></Map>
      </div>
    </>
  )
}

export default App
