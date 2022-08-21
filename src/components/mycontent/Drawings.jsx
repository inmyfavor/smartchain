import React, { useReducer, useState } from 'react';

import {ReactComponent as ExitIcon} from '../icons/exit.svg';

// import { initialCards } from '../strangerData/DataStr';

function cardReducer(state, event) {
    if (event.type === 'delete') {
        state = state.filter(card => card.id !== event.id);
    }
    return state;
}

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

const Delete = (props) => {
    return (
        <div className='relative w-[384px]'>
            <div className='flex flex-col bg-dark-blue h-[118px] rounded-t-[8px] border-b border-[#ffffff66] px-[67px]'>
                <span className='text-white text-[18px] font-medium text-center mt-[19px] mb-[8px]'>Удаление рисунка</span>
                <span className='text-white text-[16px] text-center'>Вы уверены, что хотите удалить рисунок {props.card.name}?</span>
            </div>
            <div className='flex flex-row bg-dark-blue h-[43px] rounded-b-[8px]'>
                <button 
                    onClick={props.close}
                    className='font-medium text-[18px] text-[#29eee7] w-1/2 border-r-[0.5px] border-[#ffffff66]'>НЕТ</button>
                <button
                    onClick={() => props.dispatch({type: 'delete'})}
                    className='font-medium text-[18px] text-[#29eee7] w-1/2'>ДА</button>
            </div>
        </div>
    );
};

const Placement = (props) => {
    return (
        <div className='flex flex-row gap-[34px]'>
            <div className='text-white text-[16px] font-medium'>
                Скамейка №{ props.id.length !== 4 ? '0'.repeat(4-props.id.length) + props.id : props.id }
            </div>
            <div className='flex flex-row items-center gap-[10px]'>
            <img src='svg/calendar.svg' alt=''/>
                <span className='text-[12px] text-text-gray'>{props.date}</span>
            </div>
            <div className='flex flex-row items-center gap-[11px]'>
                <img src='svg/location.svg' alt=''/>
                <span className='text-[12px] text-text-blue'>{props.location}</span>
            </div>
        </div>
    )
}

const Info = (props) => {
    return (
        <div className='flex flex-col bg-dark-blue justify-left relative w-[592px] min-h-[200px] p-[32px] rounded-[16px]'>
            <button onClick={props.close}
            className='absolute right-[20px] top-[20px]'>
                <ExitIcon className='transition-all text-text-gray hover:text-white'/>
            </button>
            <span className='text-white font-medium text-[18px] mb-[24px]'>Информация о рисунке {props.card.name}</span>
            <span className='text-white text-[16px] mb-[17px]'>Этот рисунок был расположен на устройствах:</span>
            <div className='flex flex-col gap-[8px]'>
                { props.card.placements.map(pl => <Placement key={'placement:'+pl.id} {...pl}/>)}
            </div>
        </div>
    );
};

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

const Drawings = (props) => {
    const [cards, dispatch] = useReducer(cardReducer, props.initialCards);
    return (
        <div className='flex flex-row flex-wrap gap-[32px]'>
           {cards.map(card =>
                <Card
                    dispatch={(event) =>dispatch({...event, id: card.id})}
                    key={'card:'+card.id} {...card}
                />)
            }
        </div>
    );
};

export default Drawings;