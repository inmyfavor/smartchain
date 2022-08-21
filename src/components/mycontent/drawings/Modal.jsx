import React from 'react';

import Delete from './Delete';
import Info from './Info';

const Modal = (props) => {
    return props.modal !== null
        ? <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center bg-[rgba(67,68,111,0.7)]'>
                <div onClick={props.close}  className='absolute w-full h-full z-[0]'></div>
                {
                    props.modal === 'trash'
                        ? <Delete dispatch={props.dispatch} card={props.card} close={props.close}/>
                    : props.modal === 'info'
                        ? <Info card={props.card} close={props.close}/>
                    : null
                }
            </div>
        : null;
};

export default Modal;