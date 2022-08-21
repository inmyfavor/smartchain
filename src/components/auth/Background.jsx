import React, { useEffect, useState } from 'react';


const BackgroundX= (props) => {
    return (
        <div className='absolute w-full h-full'>
            <img className='absolute h-full w-full bottom-[7%] left-0 right-0' src='svg/background.svg' alt=''/>
            <img style={{right: (2 + props.x)+'%'}} className='absolute w-[20%] h-[40%] bottom-[5%]' src='svg/dots.svg' alt=''/>
            <img style={{right: (3 + props.x)+'%'}} className='absolute w-[20%] h-[35%] bottom-[5%]' src='svg/bench.svg' alt=''/>
            <img style={{right: (87 - props.x)+'%'}} className='absolute w-[2.5%] h-1/12 bottom-[37%] animate-[flow_2s_infinite]' src='svg/brush.svg' alt=''/>
            <img style={{right: (78 - props.x)+'%'}} className='absolute w-[3%] h-1/12 bottom-[13%] animate-[flow_2s_infinite]' src='svg/heart.svg' alt=''/>
            <img style={{right: (13 + props.x)+'%'}} className='absolute w-[4%] h-1/12 bottom-[78%] animate-[flow_2s_infinite]' src='svg/like.svg' alt=''/>
            <img style={{right: (82 - props.x)+'%'}} className='absolute w-[3%] h-1/12 bottom-[67%] animate-[flow_2s_infinite]' src='svg/palette.svg' alt=''/>
            <img style={{right: (9 + props.x)+'%'}} className='absolute w-[3%] h-1/12 bottom-[53%] animate-[flow_2s_infinite]' src='svg/smile.svg' alt=''/>
        </div>
    );
}

const breakPoints = [960, 1200, 1440, 1920];
const backgrounds = [<BackgroundX x={0}/>, <BackgroundX x={3}/>, <BackgroundX x={6}/>, <BackgroundX x={9}/>]
function getBackground() {
    for (let i = 0; i < breakPoints.length; i++) {
        if (window.innerWidth < breakPoints[i]) return backgrounds[i];
    }
    return backgrounds[breakPoints.length - 1];
}

const Background = () => {
    const [background, setBackground] = useState(getBackground());

    function listenResize() {
        const bg = getBackground()
        if (background !== bg) {
            setBackground(bg)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', listenResize);
        return () => window.removeEventListener('resize', listenResize);
    })

    return background;
};

export default Background