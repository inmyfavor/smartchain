import React from 'react';

const GameAchievements = (props) => {
    let curPoints = 150;
    return (
        <div className='flex flex-row justify-between items-start mr-[200px] mb-[12px]'>
            <div className='flex flex-row items-center gap-[8px]'>
                {props.icon}
                <span className='text-white text-[16px]'>{props.name}</span>
            </div>
            <div className='flex flex-col gap-[4px]'>
                <div className='h-[16px] w-[136px] rounded-[8px] border border-text-blue'>
                    <div style={{width: (curPoints/props.points)*136}} className='h-full rounded-[8px] bg-text-blue'></div>
                </div>
                <div className='text-text-blue text-[10px] text-center'>{curPoints} / {props.points} очков</div>
            </div>
        </div>
    );
};

export default GameAchievements;