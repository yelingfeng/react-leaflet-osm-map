
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet'
function Map() {
  const center =[39.922682,116.380697]
  // const url = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'
  // 本地瓦片
  const url = 'osm/Tiles/{z}/{x}/{y}.png'
  return (
    <MapContainer center={center} zoom={12} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />
      <Marker position={center} >
        <Popup>
           React + Leafet + OSM Demo
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;