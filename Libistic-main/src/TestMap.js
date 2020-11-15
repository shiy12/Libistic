import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "80vh",
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}



const markerSet = [
    {lat:43.261065 ,lng:-79.922575, index:0},
    {lat:43.262695, lng:-79.917924, index:1},
    {lat:43.260378, lng:-79.918082, index:3},
    {lat:43.262672, lng:-79.903575, index:4},
]

const center = {lat: 43.260855, lng: -79.919226};

let zoom = 13

export default function MapView(){
    const {isLoaded, LoadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyBC2kfpUyq_pgNybasVW3IxvDKV2lHDi6Y",
        libraries,
    })

    const [selected, setSelected] = React.useState(null);

    if (LoadError) return "Error loading maps";
    if (!isLoaded) return "Loading the maps";
    

    return(
        <div>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={zoom} 
            center={center}
            options={options}>
                {markerSet.map(marker =><Marker 
                key={marker.index}
                position={{lat:marker.lat, lng:marker.lng}} 
                />)}
            
                
            </GoogleMap>
        </div>
    )
}