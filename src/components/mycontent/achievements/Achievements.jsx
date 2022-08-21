import React from 'react';

import Card from './Card';

const Achievements = (props) => {
    return (
        <div className='flex flex-row flex-wrap gap-[32px]'>
            {props.achievements.map((ach, index) => <Card key={'ach:'+index} {...ach}/>)}
        </div>
    );
};

export default Achievements;