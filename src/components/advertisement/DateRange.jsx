import React, {useState} from 'react';

import Month from '../Month';

export const BackArrow = (props) => {
    return (
        <button 
            onClick={()=>{
                props.date.setMonth(props.date.getMonth()-1);
                props.setDate(new Date(props.date));
            }}
            className='absolute left-[29px] top-[25px]'>
                <img src='svg/backarrow.svg' alt=''/>
        </button>
    );
};

 export const ForwardArrow = (props) => {
    return (
        <button
            onClick={()=>{
                props.date.setMonth(props.date.getMonth()+1);
                props.setDate(new Date(props.date));
            }}
            className='absolute right-[29px] top-[25px]'>
                <img src='svg/forwardarrow.svg' alt=''/>
        </button>
    );
};

const DateRange = (props) => {

    const [start, _setStart] = useState(null);
    const [end, _setEnd] = useState(null);
    const [date, setDate] = useState(new Date());

    const nextDate = new Date(date);
    nextDate.setMonth(nextDate.getMonth()+1);

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
            <BackArrow date={date} setDate={setDate}/>
            <Month date={date} start={start} end={end} setStart={setStart} setEnd={setEnd}/>
            <Month date={nextDate} start={start} end={end} setStart={setStart} setEnd={setEnd}/>
            <ForwardArrow date={date} setDate={setDate}/>
        </div>
    );
};

export default DateRange;