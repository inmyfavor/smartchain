import React from 'react';
import BanketIcon from './devicesIcons/BanketIcon';
import BenchIcon from './devicesIcons/BenchIcon';
import BinIcon from './devicesIcons/BinIcon';
import BookIcon from './devicesIcons/BookIcon';
import EcoIcon from './devicesIcons/EcoIcon';
import PostIcon from './devicesIcons/PostIcon';
import ScreenIcon from './devicesIcons/ScreenIcon';
import SignIcon from './devicesIcons/SignIcon';
import WifiIcon from './devicesIcons/WifiIcon';

const DeviceType = (props) => {
    const fill = props.status === 'ok' 
        ? 'url(#paint0_linear_2594_5357)'
    : props.status === 'disabled'
        ? '#A8A9BC'
    : props.status === 'error'
        ? '#EB5757'
    : null
    return (
        <div>
            <svg aria-hidden="true" focusable="false" className="w-0 h-0 absolute">
                <linearGradient id="paint0_linear_2594_5357" x1="3.25006" y1="19.2961" x2="23.111" y2="8.76396" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3AED97"/>
                    <stop offset="1" stop-color="#00FFE0"/>
                </linearGradient>
            </svg>
            { props.name === 'Скамейка'
                ? <BenchIcon fill={fill}/>
            : props.name === 'Банкетка'
                ? <BanketIcon fill={fill}/>
            : props.name === 'Урна'
                ? <BinIcon fill={fill}/>
            : props.name === 'Буккроссинг'
                ? <BookIcon fill={fill}/>
            : props.name === 'Эко портал'
                ? <EcoIcon fill={fill}/>
            : props.name === 'Экран'
                ? <ScreenIcon fill={fill}/>
            : props.name === 'Дорожный знак'
                ? <SignIcon fill={fill}/>
            : props.name === 'Станция + Wi-Fi'
                ? <WifiIcon fill={fill}/>
            : props.name === 'Фонарный столб'
                ? <PostIcon fill={fill}/>
            : null
            }
        </div>
    );
};

export default DeviceType;