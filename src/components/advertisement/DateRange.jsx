import React, {useState} from 'react';

import Month from '../Month';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function firstDay(date) {
    if(new Date(date).getDay()===0) {
        return 6; 
    } else {
        return new Date(date).getDay()-1;
    }
};

const DateRange = (props) => {
    const [start, _setStart] = useState(null);
    const [end, _setEnd] = useState(null);
    const [date, setDate] = useState(new Date());

    function setStart(val) {
        props?.onChange([val, end]);
        _setStart(val);
    }
    function setEnd(val) {
        props?.onChange([start, val]);
        _setEnd(val);
    }
    return (
        <div className='relative flex flex-row gap-[104px] px-[24px] py-[16px] bg-dark-blue rounded-[8px] w-full h-[380px]'>
            <button 
                onClick={()=>{
                    date.setMonth(date.getMonth()-1);
                    setDate(new Date(date));
                }}
                className='absolute left-[29px] top-[25px]'>
                    <img src='svg/backarrow.svg' alt=''/>
            </button>
            <Month date={new Date(`${date.getFullYear()}/${date.getMonth()}`)} month={months[date.getMonth()]} 
            days={new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()} firstDay={firstDay(`${date.getFullYear()}/${date.getMonth()+1}`)} 
            start={start} end={end} setStart={setStart} setEnd={setEnd}/>
            <Month date={new Date(`${date.getFullYear()}/${date.getMonth()+1}`)} month={months[date.getMonth()+1]} 
            days={new Date(date.getFullYear(), date.getMonth()+2, 0).getDate()} firstDay={firstDay(`${date.getFullYear()}/${date.getMonth()+2}`)} 
            start={start} end={end} setStart={setStart} setEnd={setEnd}/>
            <button
                onClick={()=>{
                    date.setMonth(date.getMonth()+1);
                    setDate(new Date(date));
                }}
                className='absolute right-[29px] top-[25px]'>
                    <img src='svg/forwardarrow.svg' alt=''/>
            </button>
        </div>
    );
};

export default DateRange;