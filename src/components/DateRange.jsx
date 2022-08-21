import React, {useState} from 'react';
import classNames from 'classnames';


const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const dates = Array.from({length:31}, (_,i)=>i+1);
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const Month = (props) => {
    const padding = Array.from({length:props.firstDay}, (_,i)=>i);
    return (
        <div className='flex flex-col align-center'>
            <div className='font-medium text-white text-[18px] text-center mb-[24px]'>{props.month}</div>
            <div className='flex flex-row gap-[14px] mb-[16px]'>
                {days.map(day => {
                    return (
                        <div key={'day:'+day} className='text-white text-[14px] w-[32px] h-[23px] text-center'>
                            {day}
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-row flex-wrap gap-[14px]'>
                {padding.map(pad => {
                    return (
                        <div key={'pad:'+pad} className='w-[32px] h-[32px]'></div>
                    )
                })}
                {dates.slice(0,props.days).map(date => {
                    date = new Date(props.date.setDate(date));
                    return (
                        <button 
                            onClick={() => {
                                if (props.start === null) {
                                    props.setStart(date);
                                } else if (props.end !== null) {
                                    props.setStart(date);
                                    props.setEnd(null);
                                } else if (date < props.start) {
                                    props.setEnd(props.start)
                                    props.setStart(date);
                                } else if (date > props.start) {
                                    props.setEnd(date);
                                }
                            }}
                            key={'day:'+date.getDate()}
                            className={classNames('text-white text-[14px] w-[32px] h-[32px] text-center relative', {
                                'border border-text-blue text-text-blue': +date === +props.start || +date === +props.end
                            })}
                        >
                                {
                                    date > props.start && date < props.end && <div className='absolute left-[-14px] top-0 bg-[#225d73] w-[60px] h-[32px]'></div>
                                }
                                {
                                    +date === +props.end && +props.start !== +props.end && <div className='absolute left-[-14px] top-[-1px] bg-[#225d73] w-[13px] h-[32px]'></div>
                                }
                                <div className='relative'>{date.getDate()}</div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

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