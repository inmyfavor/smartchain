import React from 'react';

import ReactDOMServer from 'react-dom/server';

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import L from 'leaflet';

import MarkerIcon from './devicesIcons/MarkerIcon';
import DeviceType from './DeviceType';

const DeviceMarker = (props) => {
    return (
        <MarkerIcon>
            <div className='absolute top-[10px]'>
                <DeviceType name={props.name} status={props.status}/>
            </div>
        </MarkerIcon>
    );
};

function Map(props) {
    const setMap = props.setMap ?? (() => {});
    return (
        <MapContainer className="w-full h-full" ref={setMap} center={[55.755687, 37.829557]} zoom={12} scrollWheelZoom={false} attributionControl={false}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            {props.markers.map(a =>
                <Marker 
                    key={'marker:'+a.id} 
                    position={[a.lat, a.lon]}
                    icon={L.divIcon({
                        className: 'custom-icon',
                        html: ReactDOMServer.renderToString(<DeviceMarker name={props.name} status={props.status}/>),
                        iconSize: [41, 59]
                    })}
                    name={props.name}/>
            )}
        </MapContainer>
    );
}

export default Map;