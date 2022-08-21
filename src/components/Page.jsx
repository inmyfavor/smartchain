import React from "react";

const Header = (props) => {
    return (
        <header className='flex flex-row items-center justify-between bg-header-blue h-[70px] px-[72px] py-[15px]'>
            <div className='flex flex-row items-center gap-[16px]'>
                <img className='w-[225px] h-[21px]' src='svg/smartchain.svg' alt=''/>
                { props.content }
            </div>
            <div className='flex flex-row items-center gap-[8px]'>
                <span className='text-white font-medium text-[14px]'>Профиль</span>
                <img className='w-[7px] h-[4px]' src='svg/downarrow.svg' alt=''/> 
                <div className='rounded-full bg-dark-blue w-[40px] h-[40px]'></div>
            </div>
        </header>
    );
};

const Body = (props) => {
    return (
        <div className='grow relative bg-main-blue flex flex-col'>
            <div className='grow relative overflow-hidden'>
                {props.children}
            </div>
            <footer className='h-[100px] bg-header-blue w-full'/>
        </div>
    );
};

const Page = (props) => {
    return (
        <div className='font-roboto flex flex-col absolute top-0 bottom-0 left-0 right-0 overflow-hidden'>
            <Header content={props.header}/>
            <Body>
                { props.children }
            </Body>
        </div>
    );
};

export default Page;