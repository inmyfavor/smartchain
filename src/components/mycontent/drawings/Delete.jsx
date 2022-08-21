import React from 'react';

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

export default Delete;