import {ReactComponent as CupIcon} from '../../icons/cup.svg';
import {ReactComponent as StarIcon} from '../../icons/star.svg';

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