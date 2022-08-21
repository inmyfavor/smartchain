import {ReactComponent as CupIcon} from '../../icons/cup.svg';
import {ReactComponent as StarIcon} from '../../icons/star.svg';

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
