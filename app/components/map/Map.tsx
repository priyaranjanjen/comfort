"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix broken default marker icons (common Leaflet + Vite bug)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

// Custom price tile marker
function createPriceIcon(price: number) {
  return L.divIcon({
    className: '',
    html: `<div style="
      background: #2563eb;
      color: white;
      width: max-content;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    ">₹${price.toLocaleString()}</div>`,
    iconAnchor: [40, 12],
  })
}

interface Listing {
  id: number;
  lat: number;
  lng: number;
  price: number;
  title: string;
}

// tiles data to be fetched from backend db
const listings: Listing[] = [
  { id: 1, lat: 26.144, lng: 91.736, price: 8500,  title: '2BHK in Paltan Bazaar' },
  { id: 2, lat: 26.148, lng: 91.742, price: 12000, title: '3BHK in Christianbasti' },
  { id: 3, lat: 26.140, lng: 91.730, price: 6200,  title: '1BHK in Uzanbazar' },
]

export default function RentalMap() {
  return (
    <MapContainer
      center={[26.1445, 91.7362]} // Guwahati coordinates
      zoom={14}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {listings.map(listing => (
        <Marker
          key={listing.id}
          position={[listing.lat, listing.lng]}
          icon={createPriceIcon(listing.price)}
        >
          <Popup>
            <strong>{listing.title}</strong><br />
            ₹{listing.price.toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}