import React from "react";

import { Link } from "react-router-dom";

import { useAuth } from '../auth';

const Header = (props) => {
    const auth = useAuth();
    return (
        <header className='flex flex-row items-center justify-between bg-header-blue h-[70px] px-[72px] py-[15px]'>
            <Link to="/" className='flex flex-row items-center gap-[16px]'>
                <img className='w-[225px] h-[21px] cursor-pointer' src='svg/smartchain.svg' alt=''/>
                { props.content }
            </Link>
            <Link to="/profile" className='flex flex-row items-center gap-[8px] cursor-pointer'>
                <span className='text-white font-medium text-[14px]'>Профиль</span>
                <img className='w-[7px] h-[4px]' src='svg/downarrow.svg' alt=''/> 
                <div className='flex justify-center items-center rounded-full bg-dark-blue w-[40px] h-[40px]'>
                    {
                        auth.user?.type === 'owner' 
                            ? <img src='images/company.svg' alt='' className='h-[22px]'/>
                        : auth.user?.type === 'stranger'
                            ? <img src='images/user.svg' alt='' className='h-[28px]'/>
                        : <img src='images/avatar.svg' alt='' className='h-[28px] mt-[5px]'/>
                    }
                </div>
            </Link>
        </header>
    );
};

const Body = (props) => {
    return (
        <div className='grow relative bg-[#39396e] flex flex-col overflow-y-auto'>
            <div className='grow relative'>
                {props.children}
            </div>
            {/* <div className='min-h-[100px] bg-header-blue w-full'/> */}
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
            <div id='floating-ui-root'></div>
        </div>
    );
};

export default Page;