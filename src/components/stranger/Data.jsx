import {ReactComponent as CupIcon} from '../icons/cup.svg';
import {ReactComponent as StarIcon} from '../icons/star.svg';

export const initialCardsStr = [
    {
        id: '1',
        name: 'Пёсель',
        image: 'images/stranger/content-1.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '2', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '3', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '4', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '2',
        name: 'Кисель',
        image: 'images/stranger/content-2.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '3',
        name: 'Гусель',
        image: 'images/stranger/content-3.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '4',
        name: 'Вебрюдиль',
        image: 'images/stranger/content-4.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '2', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '3', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'},
            {id: '4', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '5',
        name: 'Пупсень',
        image: 'images/stranger/content-5.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
    {
        id: '6',
        name: 'Вупсень',
        image: 'images/stranger/content-6.png',
        placements: [
            {id: '1', date: '1/04/2021-3/04/2021', location: 'г.Москва,ул.Строителей'}
        ]
    },
];

export const achievementsStr = [
    {
        id: '1',
        image: 'images/stranger/ach-1.png',
        gradientFrom: '#FFBCA8',
        gradientTo: '#FF43C4',
        cups: 13,
        gameAch: [
            { id: 1, name: 'Червь', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Уж', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Удав', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Питон', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Чёрная мамба', points: 2000, icon: <StarIcon/> },
        ]
    },
    {
        id: '2',
        image: 'images/stranger/ach-2.png',
        gradientFrom: '#7093FF',
        gradientTo: '#5ED7CE',
        cups: 3,
        gameAch: [
            { id: 1, name: 'Червь', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Уж', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Удав', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Питон', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Чёрная мамба', points: 2000, icon: <StarIcon/> },
        ]
    },
    {
        id: '3',
        image: 'images/stranger/ach-3.png',
        gradientFrom: '#D96FFF',
        gradientTo: '#6437FA',
        cups: 31,
        gameAch: [
            { id: 1, name: 'Червь', points: 150, icon: <CupIcon className='text-bronze'/> },
            { id: 2, name: 'Уж', points: 300, icon: <CupIcon className='text-silver'/> },
            { id: 3, name: 'Удав', points: 500, icon: <CupIcon className='text-gold'/> },
            { id: 4, name: 'Питон', points: 1000, icon: <StarIcon/> },
            { id: 5, name: 'Чёрная мамба', points: 2000, icon: <StarIcon/> },
        ]
    },
];

export const area = [
    {id: '1', address: 'г.Москва,ул.Строителей', lat: 55.751999, lon: 37.617734},
    {id: '2', address: 'г.Москва,ул.Житная', lat: 55.751399, lon: 37.417734},
    {id: '3', address: 'г.Москва,ул.Садовая-Сухаревская', lat: 55.756969, lon: 37.6345734},
    {id: '4', address: 'г.Москва,ул.Спартаковская', number: 3, lat: 55.756969, lon: 37.6143634},
];

export const show = [
    {id: 1, name: 'Реклама сервиса', date: '06/05/2021 - 08/05/2021', wasted: '200/300', areaId: '1' },
    {id: 2, name: 'Реклама магазина', date: '06/05/2021 - 08/05/2021', wasted: '1000/2000', areaId: '2'},
    {id: 3, name: 'Реклама товаров', date: '06/05/2021 - 08/05/2021', wasted: '70/3000', areaId: '3'},
];

export const initialModeration = [
    {id: 1, name: 'Реклама сервиса', date: '06/05/2021 - 08/05/2021', price: '300', status: 'accepted', areaId: '1'},
    {id: 2, name: 'Реклама магазина', date: '06/05/2021 - 08/05/2021', price: '2000', status: 'checking', areaId: '2'},
    {id: 3, name: 'Реклама товаров', date: '06/05/2021 - 08/05/2021', price: '3000', status: 'rejected', areaId: '3'},
];

export const links = {
    '/': 'Мой контент',
    '/advertisement': 'Реклама'
}