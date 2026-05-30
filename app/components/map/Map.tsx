"use client";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server';
import { TiLocation } from 'react-icons/ti';

const userLocationIcon = L.divIcon({
  html: renderToStaticMarkup(<TiLocation size={40} className='text-gray-800 animate-bounce' />),
  className: '',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

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

import { memo, useEffect, useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';

// tiles data to be fetched from backend db
const listings: Listing[] = [
  { id: 1, lat: 26.144, lng: 91.736, price: 8500, title: '2BHK in Paltan Bazaar' },
  { id: 2, lat: 26.148, lng: 91.742, price: 12000, title: '3BHK in Christianbasti' },
  { id: 3, lat: 26.140, lng: 91.730, price: 6200, title: '1BHK in Uzanbazar' },
]

function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState<[number, number] | null>(null);

  const locateUser = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        // Fly to user location smoothly
        map.flyTo(coords, 17, {
          duration: 2
        });
      },
      (err) => {
        console.warn(`Geolocation ERROR(${err.code}): ${err.message}`);
        alert("Could not get your location. Please check your permissions.");
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    locateUser();
  }, [map]);

  return (
    <>
      <div className='absolute bottom-10 right-4 p-2 flex items-center justify-center shadow-2xl border border-gray-300 z-1000 bg-gray-600 text-white rounded-lg cursor-pointer  transition-all'>
        <button
          onClick={(e) => {
            e.stopPropagation();
            locateUser();
          }}
          title="Find my location"
        >
          <MdOutlineMyLocation size={18} className='cursor-pointer'/>
        </button>
      </div>
      {position === null ? null : (
        <Marker position={position} icon={userLocationIcon}>
          <Popup>
            <strong>You are here</strong>
          </Popup>
        </Marker>
      )}
    </>
  );
}

const RentalMap = memo(function RentalMap() {
  return (
    <MapContainer
      key={new Date().getTime()}
      center={[26.1445, 95.7362]} // Guwahati coordinates
      zoom={18}
      zoomControl={false}
      style={{ height: '100vh', width: '100%' }}
    >
      <LocationMarker />
      {/* <ZoomControl position="bottomright" /> */}

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
});

export default RentalMap;