import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from '../auth';
import Tippy from "@tippyjs/react";
import classNames from "classnames";
import Confirm from "../profile/Confirm";
// import Confirm from "./Confirm";

const Header = (props) => {
    const auth = useAuth();
    const user = auth.user?.type;
    const loggedOut = user !== 'owner' && user !== 'stranger';
    const [modal, setModal] = useState(null);
    return (
        <>
            <header className='flex flex-row items-center justify-between bg-header-blue h-[70px] px-[72px] py-[15px]'>
                <Link to="/" className='flex flex-row items-center gap-[16px]'>
                    <img className='w-[225px] h-[21px] cursor-pointer' src='svg/smartchain.svg' alt=''/>
                    { props.content }
                </Link>
                <Tippy
                    content={
                        <div className="w-[120px] flex flex-col gap-[8px]">
                            <Link to="/profile" className='text-[14px] cursor-pointer'>Личный кабинет</Link>
                            <div className='text-[14px] cursor-pointer' onClick={() => setModal('changeUser')}>Сменить профиль</div>
                            <div className='text-[14px] cursor-pointer' onClick={() => setModal('logout')}>Выйти</div>
                        </div>
                    }
                    interactive
                    theme="dark-blue"
                    animation="shift-away-subtle"
                    duration={[450, 125]}
                    disabled={loggedOut}
                >
                    <div className={classNames('flex flex-row items-center gap-[8px]', {
                        'cursor-pointer' : !loggedOut
                    })}>
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
                    </div>
                </Tippy>
            </header>
            { modal !== null &&
            <div className='fixed z-[10] w-full h-full top-0 left-0 flex justify-center items-center bg-[rgba(67,68,111,0.7)]'>
                <div onClick={() => setModal(null)}  className='absolute w-full h-full z-[0]'></div>
                { modal === 'logout'
                    ? <Confirm 
                    close={() => setModal(null)}
                    title='Выйти из профиля'
                    text='Вы уверены, что хотите выйти из профиля?'
                    modal={modal}/>
                    : <Confirm 
                    close={() => setModal(null)}
                    title='Сменить профиль'
                    text={`Вы уверены, что хотите стать ${user === 'owner' ? 'Прохожим' : 'Владельцем'}`}
                    modal={modal}/>
                }
            </div> }
        </>
    );
};

const Body = (props) => {
    return (
        <div className='grow relative bg-[#39396e] flex flex-col overflow-y-auto'>
            <div className='grow relative'>
                {props.children}
            </div>
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