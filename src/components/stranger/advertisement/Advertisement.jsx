import React, { useState, useRef, useEffect, useMemo } from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away-subtle.css';

import Tippy from '@tippyjs/react';
import {inlinePositioning} from 'tippy.js';

import DateRange from './DateRange';

import {ReactComponent as ExitIcon} from '../../icons/exit.svg';

import Map from '../../Map';

import classNames from 'classnames';

const show = [
    {id: 1, name: 'Реклама сервиса', date: '06/05/2021 - 08/05/2021', wasted: '200/300'},
    {id: 2, name: 'Реклама магазина', date: '06/05/2021 - 08/05/2021', wasted: '1000/2000'},
    {id: 3, name: 'Реклама товаров', date: '06/05/2021 - 08/05/2021', wasted: '70/3000'},
];

const initialModeration = [
    {id: 1, name: 'Реклама сервиса', date: '06/05/2021 - 08/05/2021', price: '300', status: 'accepted'},
    {id: 2, name: 'Реклама магазина', date: '06/05/2021 - 08/05/2021', price: '2000', status: 'checking'},
    {id: 3, name: 'Реклама товаров', date: '06/05/2021 - 08/05/2021', price: '3000', status: 'rejected'},
];

const Show = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='text-white text-[16px] w-1/3'>{props.id}. {props.name}</div>
            <img className='mr-[9px]' src='svg/img.svg' alt=''/> 
            <div className='text-text-blue font-medium text-[14px] w-1/3'>{props.date}</div>
            <div className='font-medium text-white text-[14px] w-1/6'>
                <Tippy
                    content={'Потрачено рекламного бюджета'}
                    theme="light"
                    arrow={true}
                    placement="bottom"
                    animation="shift-away-subtle"
                    duration={[450, 125]}
                    inlinePositioning={true}
                    plugins={[inlinePositioning]}
                >
                    <span>{props.wasted} руб</span>
                </Tippy>
            </div>
            
            <div className='w-1/6 flex flex-row justify-end'>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px]
                hover:bg-gradient-to-br from-[#7093ff] to-[#5bf0ee] shrink-0'>
                    <img src='svg/location-white.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                    <img src='svg/pen.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue shrink-0'>
                    <img src='svg/settings.svg' alt=''/>
                </button>
            </div>
        </div>
    );
};

const Moderation = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='text-white text-[16px] w-1/3'>{props.index}. {props.name}</div>
            <img className='mr-[9px]' src='svg/img.svg' alt=''/> 
            <div className='text-text-blue font-medium text-[14px] w-1/3'>{props.date}</div>
            <div className='font-medium text-white text-[14px] w-1/6'>{props.price} руб</div>
            <div className='w-1/6 flex flex-row justify-end'>
            { 
                    <Tippy
                        content={
                            props.status === 'rejected'
                                ? <div className='flex flex-col'>
                                    <div className='text-[14px] mb-[8px]'>Объявление отклонено владельцем по причине:</div>
                                    <div className='text-[13px] text-text-gray mb-[16px]'>Реклама не соответствует правилам</div>
                                    <div className='text-[13px] text-text-gray'>Пожалуйста, ознакомьтесь</div>
                                    <div className='text-[13px] text-text-gray cursor-pointer underline hover:text-white'>
                                        с правилами размещения рекламных объявлений
                                    </div>
                                </div>
                            : props.status==='accepted'
                                ? 'Объявление принято'
                            : props.status==='checking'
                                ? 'Объявление находится на проверке'
                            : null
                        }
                        theme="dark"
                        arrow={true}
                        placement="bottom"
                        animation="shift-away-subtle"
                        duration={[450, 125]}
                        inlinePositioning={true}
                        plugins={[inlinePositioning]}
                    >
                        {
                        props.status === 'accepted'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#00ff75]'></div>
                            </div>
                        : props.status==='rejected'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#f83939]'></div>
                            </div>
                        : props.status==='checking'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#FFE555]'></div>
                            </div>
                        : null
                        }
                        
                    </Tippy> 
            }
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                    <img src='svg/location-white.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                    <img src='svg/pen.svg' alt=''/>
                </button>
                <button onClick={() => props.remove(props.id)} className='relative h-[24px] w-[24px] rounded-[8px] bg-header-blue
                        bg-gradient-to-br from-[#ff7285] to-[#ff8b59] shrink-0'
                >
                    <div
                        className='absolute font-medium whitespace-nowrap text-white text-[14px] h-[24px] w-[24px] hover:w-[154px] duration-500 rounded-[8px] bg-header-blue
                            bg-gradient-to-br from-[#ff7285] to-[#ff8b59] top-0 right-0 overflow-hidden'
                    >
                        <div className='absolute top-0 left-0 flex flex-row gap-[8px] ml-[-4px] items-center justify-center h-[24px] w-[154px]'>
                            <ExitIcon className='text-white h-[12px] w-[12px]'/>
                            <div>Отменить заявку</div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

const YourAd = (props) => {
    function removeModeration(id) {
        props.setModeration(props.moderation.filter(m => m.id !== id));
    }
    return (
        <div className='flex flex-col xl:flex-row gap-[19px] w-full min-h-[300px] bg-header-blue rounded-[16px] p-[16px]'>
            <div className='w-full xl:w-2/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Сейчас показывает</div>
                <div className='flex flex-col gap-[16px] w-full min-h-[40px] bg-dark-blue rounded-[8px] p-[8px]'>
                    {show.map(sh => <Show key={'sh:'+sh.id} {...sh}/>)}
                </div>
                <div className='font-medium text-[18px] text-white'>На проверке</div>
                <div className='flex flex-col gap-[16px] w-full min-h-[40px] bg-dark-blue rounded-[8px] p-[8px]'>
                    {props.moderation.map((mod, index) => <Moderation key={'mod:'+mod.id} {...mod} index={index+1} remove={removeModeration}/>)}
                </div>
            </div>
            <div className='w-full xl:w-1/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Устройства на карте</div>
                <div className='w-full h-[300px] rounded-[8px] bg-dark-blue overflow-hidden'>
                    <Map markers={area}/>
                </div>
            </div>
        </div>
    );
};

const BuyAd = (props) => {
    const input = useRef(null);
    useEffect(() => {
        if (props.files.length===0) {
            props.setIsDisabled(true);
            props.setName('');
        }
    }, [props, props.files.length]);
    return (
        <div className='flex flex-col bg-header-blue w-[450px] p-[16px] rounded-[16px]'>
            <div className='font-medium text-[20px] text-white mb-[8px]'>Создайте объявление</div>
            {
                props.files.length === 0 
                    ? <div className='text-[16px] text-text-gray mb-[24px]'>Загрузите материалы и отправьте их на модерацию</div>
                : <div className='flex flex-col'>
                    <input 
                        onInput={(e)=>props.setName(e.target.value)}
                        value={props.name}
                        className='w-full h-[40px] outline-none text-white text-[14px] bg-dark-blue p-[13px] rounded-[8px] placeholder:text-[rgba(255,255,255,0.5)] mb-[16px]'
                        placeholder='Введите название'/>
                    <div className='flex flex-row mb-[16px]'>
                        <div>
                            {props.files.map(file => {
                                return (
                                    <div key={'file:'+file.name} className='flex flex-row items-center mb-[8px] leading-[24px]'>
                                        <div className='text-white font-medium text-[16px] mr-[11px] max-w-[200px] overflow-hidden truncate'>{file.name}</div>
                                        <ExitIcon 
                                            onClick={() => props.setFiles(props.files.filter(f => f.name !== file.name))} 
                                            className='flex-shrink-0 text-white w-[10px] h-[10px] mr-[27px] cursor-pointer'/>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {props.files.map(file => {
                                return (
                                    <div key={'file:'+file.name} className='flex flex-row items-center mb-[8px] leading-[24px]'>
                                        <div className='font-medium text-[14px] text-[#00ff75]'>ОДОБРЕНО</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
            <div className='flex flex-row gap-[16px]'>
                <button 
                    className='flex items-center justify-center h-[40px] w-[40px] rounded-[8px] bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'
                    onClick={()=>{
                        input.current.click();
                    }}
                >
                    <img src='svg/plus.svg' alt=''/>
                    <input
                        onChange={() => {
                            props.setFiles([...props.files, ...input.current.files]);
                            input.current.value = null;
                        }}
                        ref={input} className='hidden' type='file' accept="image/gif, image/jpeg" multiple/>
                </button>
                <button 
                    disabled={props.files.length===0}
                    onClick={()=>props.setIsDisabled(props.files.length===0)}
                    className='h-[40px] w-[176px] rounded-[8px] bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] text-white text-[16px] font-medium'>
                        {props.name.length === 0 ? 'Отправить' : 'Сохранить'}
                </button>
                <div className='flex flex-col'>
                    <div className='text-[12px] text-white'>Форматы: jpeg, gif.</div>
                    <div className='text-[12px] text-white underline'>Правила</div>
                </div>
            </div>
        </div>
    );
};

const area = [
    {id: '1', address: 'г.Москва,ул.Строителей', lat: 55.751999, lon: 37.617734},
    {id: '2', address: 'г.Москва,ул.Житная', lat: 55.751399, lon: 37.417734},
    {id: '3', address: 'г.Москва,ул.Садовая-Сухаревская', lat: 55.756969, lon: 37.6345734},
    {id: '4', address: 'г.Москва,ул.Спартаковская', number: 3, lat: 55.756969, lon: 37.6143634},
];


const AreaSelecting = (props) => {
    const [input, setInput] = useState('');
    const markers = useMemo(() => area.filter(a=>a.address.toLowerCase().includes(input.toLowerCase())), [input]);
    return (
        <div className='max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='text-white font-medium text-[18px] mb-[16px]'>Выберите площадку</div>
            <div className='relative mb-[24px]'>
                <img className='absolute left-[15px] top-[12px]' src='svg/search.svg' alt=''/>
                <input
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                    className='outline-none w-full h-[40px] text-white text-[14px] bg-dark-blue p-[13px] rounded-[8px] pl-[40px] placeholder:text-[rgba(255,255,255,0.5)]' 
                    placeholder='Адрес / номер скамейки'
                />
            </div>
            <div className='flex flex-row gap-[16px]'>
                <div className='flex flex-col gap-[12px] w-2/5 bg-dark-blue p-[16px] rounded-[8px]'>
                    {markers.map(ar => {
                            return (
                                <div
                                    onClick={() => {
                                        props.setPlacements([...props.placements, ar]);
                                        props.setIsSelecting(false);
                                    }}
                                    key={'ar:'+ar.id} className='flex flex-col gap-[4px] cursor-pointer'
                                >
                                    <div className='font-medium text-white text-[16px]'>
                                        Скамейка №{(ar.id.length < 4) ? '0'.repeat(4-ar.id.length)+ar.id : ar.id}
                                    </div>
                                    <div className='flex flex-row gap-[8px]'>
                                        <img src='svg/location.svg' alt=''/>
                                        <div className='text-text-blue text-[12px]'>{ar.address}</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <div className='w-3/5 rounded-[8px] overflow-hidden h-[280px]'>
                    <Map markers={markers}/>
                </div>
            </div>
        </div>
    )
}

const AreaPlacements = (props) => {
    return (
        <div className='max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='text-white font-medium text-[18px] mb-[16px]'>Выберите площадку</div>
            <div className='flex flex-row gap-[16px]'>
                <div className='w-3/5 rounded-[8px]'>
                    <div className='w-full h-[40px] font-medium text-[14px] bg-dark-blue p-[10px] rounded-[8px] flex flex-row items-center gap-[8px] text-white'>
                        <button onClick={() => props.setIsSelecting(true)} className='flex items-center justify-center h-[24px] w-[24px] rounded-[8px] bg-header-blue'>
                            <img className='w-[12px] h-[12px]' src='svg/plus.svg' alt=''/>
                        </button>
                        Добавить площадку
                    </div>
                    <div className='mt-[16px]'/>
                    {props.placements.map((ar, index) =>
                        <div key={'ar:'+ar.id} className='bg-dark-blue rounded-[8px] p-[16px] mb-[8px]'>
                            <div className='flex flex-row'>
                                <div className='font-[18px] text-white font-medium'>
                                    Площадка {index+1}
                                </div>
                                <div className='flex-1'/>
                                <button
                                    onClick={() => props.setPlacements(props.placements.filter(a => a.id !== ar.id))}
                                    className='flex items-center justify-center h-[24px] w-[24px] rounded-[8px] bg-header-blue'>
                                    <ExitIcon className='flex-shrink-0 text-white w-[10px] h-[10px]'/>
                                </button>
                            </div>
                            <div className='flex flex-row items-center mt-[8px]'>
                                <div className='flex justify-center items-center rounded-full bg-main-blue w-[16px] h-[16px]'>
                                    <div className='rounded-full bg-gradient-to-br from-[#6FFF2C] to-[#29EEE7] w-[8px] h-[8px]'/>
                                </div>
                                <div className='font-medium text-white text-[16px] ml-[8px]'>
                                    Скамейка №{(ar.id.length < 4) ? '0'.repeat(4-ar.id.length)+ar.id : ar.id}
                                </div>
                                <div className='flex flex-row gap-[8px] ml-[24px]'>
                                    <img src='svg/location.svg' alt=''/>
                                    <div className='text-text-blue text-[12px]'>{ar.address}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='w-2/5 rounded-[8px] overflow-hidden h-[280px]'>
                    <Map markers={props.placements}/>
                </div>
            </div>
        </div>
    );
}

const Area = () => {
    const [placements, setPlacements] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);
    return isSelecting
        ? <AreaSelecting setIsSelecting={setIsSelecting} placements={placements} setPlacements={setPlacements}/>
        : <AreaPlacements setPlacements={setPlacements} placements={placements} setIsSelecting={setIsSelecting}/>;
};

const Dates = (props) => {
    return (
        <div className='flex flex-col max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='font-medium text-white text-[18px] mb-[16px]'>
                Выберите даты размещения рекламы
            </div>
            <DateRange onChange={props.onChange}/>
        </div>
    );
};

function formatDate(date) {
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth()+1).padStart(2, '0')}/${date.getFullYear()}`;
}

const Placement = (props) => {
    let date = 'Не назначено';
    return (
        <div className='flex flex-col gap-[24px]'>
            {
                !props.isDisabled && props.files.length!==0 
                    ? <div className='flex flex-col gap-[40px]'>
                        <Area/>
                        <Dates onChange={(val) => {
                            if (val[0] === null) {
                                date = 'Не назначено';
                            } else if (+val[0] === val[1] || val[1] === null) {
                                date = formatDate(val[0]);
                            } else {
                                date = `${formatDate(val[0])} - ${formatDate(val[1])}`
                            }
                        }}/>
                    </div>
                : <div className='flex flex-col gap-[24px]'>
                    <div className='max-w-[800px] h-[56px] rounded-[16px] p-[16px] bg-dark-blue text-white text-[18px] font-medium placeholder:text-text-gray opacity-[0.5]'>
                        Выберите площадку
                    </div>
                    <div className='max-w-[800px] h-[56px] rounded-[16px] p-[16px] bg-dark-blue text-white text-[18px] font-medium placeholder:text-text-gray opacity-[0.5]'>
                        Выберите даты размещения рекламы
                    </div>
                </div> 
            }
            <button 
                onClick={()=>props.addModeration({
                    markers: [],
                    id: Math.random(),
                    date, price: '2000', status: 'checking'
                })}
                disabled={props.isDisabled}
                className={classNames('h-[52px] w-[280px] rounded-[8px] bg-gradient-to-br text-white font-medium text-[18px]', {
                    'from-[#363244] to-[#36274f] text-[#a8a9bc]': props.isDisabled,
                    'from-[#ffe555] to-[#fa5ddb]': !props.isDisabled
                })}>
                    Разместить
            </button>
        </div>
    );
};

const Advertisement = () => {
    const [moderation, setModeration] = useState(initialModeration);
    const [isDisabled, setIsDisabled] = useState(true);
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    return (
        <div className='flex flex-col mx-[72px] my-[50px] gap-[32px]'>
            <div className='font-medium text-[24px] text-white'>Ваша реклама</div>
            <YourAd setModeration={setModeration} moderation={moderation}/>
            <div className='font-medium text-[24px] text-white mt-[18px]'>Купить рекламу</div>
            <div className='flex flex-row gap-[72px]'>
                <BuyAd name={name} setName={setName} setIsDisabled={setIsDisabled} files={files} setFiles={setFiles}/>
                <div className='flex flex-col'>
                    <div className='text-white text-[16px] mb-[8px]'>Нет материалов для рекламы?</div>
                    <div className='text-text-gray text-[16px] mb-[16px]'>Закажите материалы у нас</div>
                    <div className='flex items-center justify-center w-[240px] h-[40px] bg-gradient-to-br from-[#3aed97] to-[#00ffe0] rounded-[8px]'>
                        <button className='flex items-center justify-center w-[238px] h-[38px] text-white font-medium text-[16px] rounded-[8px] bg-main-blue'>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <Placement addModeration={(m) => {
                setModeration([...moderation, {name, files, ...m}]);
                setName('');
                setFiles([]);
                setIsDisabled(true);
            }} isDisabled={isDisabled} files={files}/>
        </div>
    );
};

export default Advertisement;