import './MapPreview.css';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon for the marker
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapPreviewProps {
  location: string; // e.g., "São Paulo"
}

const MapPreview: React.FC<MapPreviewProps> = ({ location }) => {
  const [latLong, setLatLong] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchLatLong = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
        );
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setLatLong([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.error('Localização não encontrada');
        }
      } catch (error) {
        console.error('Erro ao buscar localização:', error);
      }
    };

    fetchLatLong();
  }, [location]);

  return (
    <div>
      {latLong ? (
        <MapContainer center={latLong} zoom={13} style={{ width: '900px', height: '340px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={latLong}>
            <Popup>{location}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Carregando localização...</p>
      )}
    </div>
  );
};

export default MapPreview;
