import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import 'leaflet-control-geocoder';
import "../style/leaflet.css";

export default function SearchFookingControl() {
  const map = useMap();

  useEffect(() => {
    const searchControl = L.Control.geocoder({
      position: 'topleft'
    }).addTo(map);

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
}