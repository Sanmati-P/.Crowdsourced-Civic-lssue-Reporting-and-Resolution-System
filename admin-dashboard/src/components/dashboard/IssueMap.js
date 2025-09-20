import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// This is a fix for the default marker icon not showing up
delete L.Icon.Default.prototype._get
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const IssueMap = ({ issues }) => {
  // Use a sensible default center for the map, like a major city or the general project area
  const defaultPosition = [11.93, 79.79]; // Example: A location in Tamil Nadu

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden">
      <MapContainer center={defaultPosition} zoom={12} scrollWheelZoom={false} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {issues.map((issue) => (
          <Marker key={issue.id} position={[issue.lat, issue.lng]}>
            <Popup>
              <h3 className="font-bold">{issue.title}</h3>
              <p>Status: {issue.status}</p>
              <p>Location: {issue.location}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IssueMap;