import React from 'react';

import classNames from 'classnames';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function getFirstDay(date) {
    return date.getDay === 0 ? 6 : date.getDay() - 1;
};

const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const dates = Array.from({length:31}, (_,i)=>i+1);

const Month = (props) => {
    const initialDate = new Date(props.date.getFullYear(), props.date.getMonth());
    const month = months[initialDate.getMonth()];
    const days = new Date(initialDate.getFullYear(), initialDate.getMonth()+1, 0).getDate();
    const firstDay = getFirstDay(initialDate);
    const padding = Array.from({length:firstDay}, (_,i)=>i);
    return (
        <div className='flex flex-col align-center'>
            <div className='font-medium text-white text-[18px] text-center mb-[24px]'>{month}</div>
            <div className='flex flex-row gap-[14px] mb-[16px]'>
                {dayNames.map(day => {
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
                {dates.slice(0,days).map(date => {
                    date = new Date(initialDate.setDate(date));
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
                            disabled={props.disabled}
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

export default Month;