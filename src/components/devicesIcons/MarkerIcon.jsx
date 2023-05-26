import React from 'react';

const MarkerIcon = (props) => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <svg 
                    width="29" 
                    height="42" 
                    viewBox="0 0 29 42" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 15.2227C29 25.347 14.6667 41.7016 14.6667 41.7016C14.6667 41.7016 0.333372 
                    25.347 0.333372 15.2227C0.333372 5.09848 9.01235 0.964844 14.6667 0.964844C20.321 0.964844 
                    29 5.09848 29 15.2227Z" fill="#31315C"/>
                </svg>
            </div>
            {props.children}
        </div>
    );
};

export default MarkerIcon;