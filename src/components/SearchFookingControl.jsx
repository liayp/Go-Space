import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

L.Control.SearchFooking = L.Control.extend({
  onAdd: function (map) {
    const img = L.DomUtil.create("img");
    img.src = "https://www.freeiconspng.com/uploads/search-icon-png-5.png";
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.cursor = "pointer";
    img.style.position = "absolute";
    img.style.top = "80px";
    img.style.right = "1370px";
    img.style.zIndex = "1000";
    img.style.backgroundColor = "white";
    img.style.borderRadius = "50%";
    img.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
    img.style.padding = "5px";
    img.style.transition = "background-color 0.3s, transform 0.3s";
    img.style.transform = "scale(1)";
    img.style.pointerEvents = "auto";
    img.style.userSelect = "none";
    img.style.display = "block";
    img.style.opacity = "1";
    img.style.filter = "drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))";
    img.style.backdropFilter = "blur(5px)";
    img.style.border = "1px solid rgba(0, 0, 0, 0.2)";
    img.style.fontSize = "16px";
    img.style.fontFamily = "Arial, sans-serif";
    img.style.fontWeight = "bold";
    img.style.textAlign = "center";
    img.style.lineHeight = "30px";
    img.style.color = "black";
    img.style.textDecoration = "none";
    img.style.boxSizing = "border-box";

    img.addEventListener("click", () => {
      alert("Search functionality is not implemented yet.");
    });

    return img;
  }
});

export default function SearchFookingControl() {
  const map = useMap();

  useEffect(() => {
    const searchControl = new L.Control.SearchFooking();
    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    }
  }, [map]);

  return null;
}