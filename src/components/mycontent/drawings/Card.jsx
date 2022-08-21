import React, { useState } from 'react';

import Modal from './Modal';

const Card = (props) => {
    const [modal, setModal] = useState(null);
    return (
        <>
            <div style={{backgroundImage: `url('${props.image}')`}} className='group w-[384px] h-[148px] rounded-[16px] overflow-hidden'>
                <div className='flex items-end justify-center w-full h-full invisible group-hover:visible hover:bg-[#202041cc]'>
                    <div className='flex flex-row gap-[8px] mb-[16px]'>
                        <button className='flex justify-center items-center bg-button-blue w-[92px] h-[40px] rounded-[8px]
                        hover:bg-gradient-to-br from-[#7093ff] to-[#5ed7ce]'>
                            <img className='w-[14px] h-[17px]' src='svg/download.svg' alt=''/>  
                        </button>
                        <button onClick={()=>setModal('trash')}
                        className='flex justify-center items-center bg-button-blue w-[92px] h-[40px] rounded-[8px] 
                        hover:bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]'>
                            <img className='w-[14px] h-[17px]' src='svg/trash.svg' alt=''/>  
                        </button>
                        <button onClick={()=>setModal('info')}
                        className='flex justify-center items-center bg-button-blue w-[92px] h-[40px] rounded-[8px]
                        hover:bg-gradient-to-br from-[#3aed97] to-[#00ffe0]'>
                            <img className='w-[14px] h-[17px]' src='svg/info.svg' alt=''/>  
                        </button>
                    </div>
                </div>
            </div>
            <Modal dispatch={props.dispatch} card={props} close={() => setModal(null)} modal={modal}/>
        </>
    );
};

export default Card;