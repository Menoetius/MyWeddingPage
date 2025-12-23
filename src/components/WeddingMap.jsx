import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import mapData from '../assets/map.json'

// Fix for default marker icon in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
})

L.Marker.prototype.options.icon = DefaultIcon

export default function WeddingMap() {
    // Center map around the venue (first feature or hardcoded)
    // Coords in GeoJSON are [lon, lat], Leaflet needs [lat, lon]
    const center = [48.933, 18.118]

    return (
        <MapContainer
            center={center}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-full"
            style={{ width: '100%', height: '100%', minHeight: '400px', zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapData.features.map((feature, index) => {
                const [lng, lat] = feature.geometry.coordinates
                return (
                    <Marker key={index} position={[lat, lng]}>
                        <Popup>
                            <div className="font-serif text-center">
                                <h3 className="font-bold text-paris-blue">{feature.properties.name}</h3>
                            </div>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}
