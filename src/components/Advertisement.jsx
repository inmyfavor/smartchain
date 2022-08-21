import React from 'react';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

import Page from './Page';

import HeaderNav from './HeaderNav';

import L from 'leaflet';

import markerIconSvg from './icons/marker.svg';
const markerIcon = new L.Icon({
    iconUrl: markerIconSvg,
    iconRetinaUrl: markerIconSvg,
    iconSize: [41, 59],
});

const show = [
    {id: 1, name: 'Реклама сервиса', date: '06/05/2021 - 08/05/2021', wasted: '200/300'},
    {id: 2, name: 'Реклама магазина', date: '06/05/2021 - 08/05/2021', wasted: '1000/2000'},
    {id: 3, name: 'Реклама товаров', date: '06/05/2021 - 08/05/2021', wasted: '70/3000'},
];

function Map() {
    const position = [51.505, -0.09];

    return (
        <MapContainer className="w-full h-full" center={position} zoom={13} scrollWheelZoom={false} attributionControl={false}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            <Marker position={position} icon={markerIcon}/>
        </MapContainer>
    );
}

const Show = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='text-white text-[16px] w-1/3'>{props.id}. {props.name}</div>
            <img className='mr-[9px]' src='svg/img.svg' alt=''/> 
            <div className='text-text-blue font-medium text-[14px] w-1/3'>{props.date}</div>
            <div className='font-medium text-white text-[14px] w-1/6'>{props.wasted} руб</div>
            <div className='w-1/6 flex flex-row justify-end'>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px]'>
                    <img src='svg/location-white.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px]'>
                    <img src='svg/pen.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue'>
                    <img src='svg/settings.svg' alt=''/>
                </button>
            </div>
        </div>
    );
};

const YourAd = () => {
    return (
        <div className='flex flex-row gap-[19px] w-full min-h-[300px] bg-header-blue rounded-[16px] p-[16px]'>
            <div className='w-2/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Сейчас показывает</div>
                <div className='flex flex-col gap-[16px] w-full min-h-[40px] bg-dark-blue rounded-[8px] p-[8px]'>
                    {show.map(sh => <Show key={'sh:'+sh.id} {...sh}/>)}
                </div>
                <div className='font-medium text-[18px] text-white'>На проверке</div>
                <div className='w-full min-h-[40px] bg-dark-blue rounded-[8px]'></div>
            </div>
            <div className='w-1/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Устройства на карте</div>
                <div className='w-full h-[300px] rounded-[8px] bg-dark-blue overflow-hidden'>
                    <Map/>
                </div>
            </div>
        </div>
    );
};

const Advertisement = () => {
    return (
        <Page header={<HeaderNav/>}>
            <div className='flex flex-col mx-[72px] my-[50px] gap-[32px]'>
                <div className='font-medium text-[24px] text-white'>Ваша реклама</div>
                <YourAd/>
                <div className='font-medium text-[24px] text-white mt-[18px]'>Купить рекламу</div>
            </div>
        </Page>
    );
};

export default Advertisement;