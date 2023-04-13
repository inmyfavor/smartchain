import React from 'react';

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import markerIconSvg from './icons/marker.svg';

import L from 'leaflet';

const markerIcon = new L.Icon({
    iconUrl: markerIconSvg,
    iconRetinaUrl: markerIconSvg,
    iconSize: [41, 59],
});

function Map(props) {
    const setMap = props.setMap ?? (() => {});
    return (
        <MapContainer className="w-full h-full" ref={setMap} center={[55.755687, 37.829557]} zoom={12} scrollWheelZoom={false} attributionControl={false}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            {props.markers.map(a =>
                <Marker key={'marker:'+a.id} position={[a.lat, a.lon]} icon={markerIcon}/>
            )}
        </MapContainer>
    );
}

export default Map;