import {ReactComponent as CupIcon} from '../icons/cup.svg';
import {ReactComponent as StarIcon} from '../icons/star.svg';

export const initialCardsOwn = [
    {
        id: '1',
        name: 'Девочка',
        image: 'images/owner/img-1.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '2', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '3', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '4', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '2',
        name: 'Лес',
        image: 'images/owner/img-2.jpg',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '3',
        name: 'Горы',
        image: 'images/owner/img-3.webp',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '4',
        name: 'Замок',
        image: 'images/owner/img-4.webp',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '2', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '3', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '4', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '5',
        name: 'Дракон',
        image: 'images/owner/img-5.webp',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '6',
        name: 'Собака',
        image: 'images/owner/img-6.webp',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
];

export const achievementsOwn = [
    {
        id: '1',
        image: 'images/owner/ach-1.png',
        gradientFrom: '#FFBCA8',
        gradientTo: '#FF43C4',
        cups: 27,
        gameAch: [
            { id: 1, name: 'Икринка', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Головастик', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Лягушка', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Квакша', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Жаба', points: 2000, icon: <StarIcon/> },
        ]
    },
    {
        id: '2',
        image: 'images/owner/ach-2.png',
        gradientFrom: '#7093FF',
        gradientTo: '#5ED7CE',
        cups: 8,
        gameAch: [
            { id: 1, name: 'Икринка', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Головастик', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Лягушка', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Квакша', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Жаба', points: 2000, icon: <StarIcon/> },
        ]
    },
    {
        id: '3',
        image: 'images/owner/ach-3.png',
        gradientFrom: '#D96FFF',
        gradientTo: '#6437FA',
        cups: 4,
        gameAch: [
            { id: 1, name: 'Икринка', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Головастик', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Лягушка', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Квакша', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Жаба', points: 2000, icon: <StarIcon/> },
        ]
    },
];

export const markers = [
    { id: 1, lat: 55.751999, lon: 37.717734 },
    { id: 2, lat: 55.951997, lon: 37.617734 },
    { id: 3, lat: 55.751999, lon: 37.917634 },
    { id: 4, lat: 55.851989, lon: 37.617624 },
]

export const deviceInfo = [
    { id: '1', name: 'Скамейка', income: '1000', ad: 5, application: 3, markers: [ {lat: 55.751974, lon: 37.545303} ], 
    address: 'г.Москва, Краснопресненская наб., 14', version: 2, secondName: 'скамейки', number: '0001',
        settings: {
            dateAndTime: true,
            temperature: false,
            weatherNow: true,
            weather3hours: true,
            weather6hours: true,
            weather9hours: false,
            ad: true,
            curencyUSD: true,
            curencyEUR: true,
            gallery: false
        }
    },
    { id: '2', name: 'Урна', income: '3000', ad: 15, application: 10, markers: [ {lat: 55.751974, lon: 37.545303} ], 
    address: 'г.Москва, Краснопресненская наб., 14', version: 2, leftWidth: '50%', rightWidth: '75%', secondName: 'урны',
    number: '0001',
        settings: {
            dateAndTime: true,
            temperature: true,
            weatherNow: true,
            weather3hours: true,
            weather6hours: true,
            weather9hours: false,
            ad: false,
            curencyUSD: true,
            curencyEUR: true,
            levels: true
        }
    },
    { id: '3', name: 'Фонарный столб', income: '0', ad: 0, application: 0, markers: [ {lat: 55.751974, lon: 37.545303} ], 
    address: 'г.Москва, Краснопресненская наб., 14', version: 2, filter: 'brightness-[.6]', number: '0001' },
    { id: '4', name: 'Дорожный знак', income: '0', ad: 0, application: 0, markers: [ {lat: 55.751974, lon: 37.545303} ], 
    address: 'г.Москва, Краснопресненская наб., 14', version: 2, filter: 'brightness-[.6]', number: '0001' },
];

export const show = [
    { id: 1, name: 'ООО "Газпром"', wasted: '200 / 300', date: '24/11/2019-28/11/2019'},
];

export const request = [
    { id: 1, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '300' },
    { id: 2, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '500' },
];

export const wait = [
    { id: 1, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '300' },
];

export const links = {
    '/devices' : 'Мои устройства',
    '/': 'Мой контент',
    '/advertisement': 'Купить рекламу',
};

export const savedOwn = [
    { id: '1', level: '3', date: '1/04/2021 18:23', address: 'г.Москва, ул.Молостовых, 14А' },
];