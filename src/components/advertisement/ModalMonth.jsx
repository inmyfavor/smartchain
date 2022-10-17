import React, { useState } from 'react';

import Month from '../Month';
import { BackArrow, ForwardArrow } from './DateRange';

const ModalMonth = (props) => {
    const [date, setDate] = useState(new Date(props.start));
    return (
        <div className='relative flex flex-row py-[16px] ml-[6px]'>
            <BackArrow date={date} setDate={setDate}/>
            <Month date={date} start={props.start} end={props.end} disabled/>
            <ForwardArrow date={date} setDate={setDate}/>
        </div>
    );
};

export default ModalMonth;