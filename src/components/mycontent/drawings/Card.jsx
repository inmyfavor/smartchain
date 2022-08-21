import classNames from 'classnames';
import React, { useState } from 'react';

import Modal from './Modal';

const CardButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            className='relative flex justify-center items-center bg-button-blue w-[92px] h-[40px] rounded-[8px] overflow-hidden'
        >
            <div className={classNames('transition-all bg-gradient-to-br opacity-0 hover:opacity-[1] absolute w-full h-full', props.color)} />
            <img className='w-[14px] h-[17px] relative pointer-events-none' src={props.image} alt=''/>  
        </button>
    );
}

const Card = (props) => {
    const [modal, setModal] = useState(null);
    return (
        <>
            <div style={{backgroundImage: `url('${props.image}')`}} className='group w-[384px] h-[148px] rounded-[16px] overflow-hidden'>
                <div className='flex items-end justify-center w-full h-full transition-all opacity-0 group-hover:opacity-[1] hover:bg-[#202041cc]'>
                    <div className='flex flex-row gap-[8px] mb-[16px]'>
                        <CardButton color='from-[#7093ff] to-[#5ed7ce]' image='svg/download.svg'/>
                        <CardButton onClick={()=>setModal('trash')} color='from-[#ffe555] to-[#fa5ddb]' image='svg/trash.svg'/>
                        <CardButton onClick={()=>setModal('info')} color='from-[#3aed97] to-[#00ffe0]' image='svg/info.svg'/>
                    </div>
                </div>
            </div>
            <Modal dispatch={props.dispatch} card={props} close={() => setModal(null)} modal={modal}/>
        </>
    );
};

export default Card;