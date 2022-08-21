import React, { useReducer } from 'react';

import Card from './Card';

function cardReducer(state, event) {
    if (event.type === 'delete') {
        state = state.filter(card => card.id !== event.id);
    }
    return state;
}

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