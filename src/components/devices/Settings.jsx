import React, { useState } from 'react';

import classNames from 'classnames';

import Tippy from '@tippyjs/react';

// import { useNavigate } from 'react-router-dom';

import { ReactComponent as LoadingIcon } from '../icons/loading.svg';

import Map from '../Map';

import { deviceInfo } from '../owner/Data';
import { BlueButton } from '../Button';

import { Status } from './Device';

const Check = (props) => {
    const [checked, setChecked] = useState(props.value);
    return (
        <div className='flex flex-row items-center cursor-pointer'>
            <div className='w-5/6 font-medium text-white text-[16px]'>{props.name}</div>
            <div className='w-1/6'>
                <div
                    onClick={()=>setChecked(!checked)} 
                    className={classNames(
                        'relative h-[20px] w-[36px] rounded-[16px] before:transition-all',
                        'before:content-[""] before:translate-x-[2px] before:top-[2px] before:h-[16px] before:w-[16px] before:bg-white before:rounded-[16px] before:absolute before:cursor-pointer', { 
                        'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] before:translate-x-[18px]' : checked,
                        'bg-[#bbbbc2]' : !checked 
                    })}>
                </div>
            </div>
        </div>
        
    );
};

const benchNames = (props) => {
    const names = [
        'Дата и время', 'Температура рядом', 'Погода сейчас', 'Погода через 3 часа',
        'Погода через 6 часов', 'Погода через 9 часов', 'Реклама', 'Курс валют: USD/RUB',
        'Курс валют: EUR/RUB', 'Галерея'
    ];
    const settings = ['dateAndTime', 'temperature', 'weatherNow', 'weather3hours', 'weather6hours',
        'weather9hours', 'ad', 'curencyUSD', 'curencyEUR', 'gallery' ];
    let content = [];
    for(let i = 0; i < names.length; i++) {
        content.push(<Check key={'check'+i} name={names[i]} value={props.settings[settings[i]]}/>)   
    }
    return content;
};

const urnNames = (props) => {
    const names = [
        'Дата и время', 'Температура рядом', 'Погода сейчас', 'Погода через 3 часа',
        'Погода через 6 часов', 'Погода через 9 часов', 'Реклама', 'Курс валют: USD/RUB',
        'Курс валют: EUR/RUB', 'Заполненность урны'
    ];
    const settings = ['dateAndTime', 'temperature', 'weatherNow', 'weather3hours', 'weather6hours',
        'weather9hours', 'ad', 'curencyUSD', 'curencyEUR', 'levels' ];
    let content = [];
    for(let i = 0; i < names.length; i++) {
        content.push(<Check key={'check'+i} name={names[i]} value={props.settings[settings[i]]}/>)   
    }
    return content;
};

const colors = ['#56ccf2', '#eb5757', '#f2994a', '#27ae60', '#bb6bd9'];

const colorsLine = (selected, setSelected, side) => {
    const colorNames = ['Голубой', 'Красный', 'Оранжевый', 'Зелёный', 'Фиолетовый'];
    let content = [];
    for(let i = 0; i < colors.length; i++) {
        content.push(
            <Tippy
                key={side+i}
                interactive
                content={
                    <div className='flex flex-col gap-[8px]'>
                        <div className='text-white text-[14px] font-medium'>{colorNames[i]} цвет</div>
                        {
                            i===selected 
                                ? <div className='text-text-gray text-[13px]'>Выбран для {side}</div>
                            : <div className='text-text-gray text-[13px]'>Нажмите, чтобы выбрать</div>
                        }
                    </div>
                }
                theme="dark-blue"
                arrow={true}
                placement={side === 'левого' ? "top" : "bottom"}
                animation="shift-away-subtle"
                duration={[450, 125]}
            >
                <div onClick={() => setSelected(i)} className='relative w-[32px] h-[32px]'>
                    <div style={{display: i===selected ? 'block' : 'none'}} 
                        className='w-full h-full rounded-[8px] bg-white'></div>
                    <div style={{backgroundColor: colors[i]}} 
                        className='absolute top-[2px] left-[2px] w-[28px] h-[28px] rounded-[7px] cursor-pointer'></div>
                </div>
            </Tippy>
        )
    }
    return content;
};

const Bench = (props) => {
      // const navigate = useNavigate();
    return (
        <div className='w-5/12'>
            <div className='flex flex-col gap-[24px] mb-[24px]'>
                <div className='text-[18px] font-medium text-white'>Режимы</div>
                {benchNames(props)}
            </div>
            <div className='flex flex-row gap-[120px] mb-[4px]'>
                <div className='font-medium text-white text-[16px]'>Галерея:</div>
                <button 
                    // onClick={()=>navigate('/')}
                    className='font-medium text-text-blue text-[14px]'>
                        ОТКРЫТЬ
                </button>
            </div>
            <div className='text-[14px] text-text-gray'>10 фотографий</div>
        </div>
    );
};

const Input = (props) => {
    const [value, setValue] = useState(props.value);
    function handleOnChange(e) {
        clearTimeout(e.target.timeout);
        props.setCheckMark('none');
        setValue(e.target.value);
        if (e.target.value !== '') {
            e.target.timeout = setTimeout(() => {
                props.setCheckMark('loading');
                e.target.timeout = setTimeout(_ => {
                    props.setCheckMark('loaded');
                    props.setName(e.target.value);
                }, 1000);
            }, 1000);
        }
    }
    return (
        <div className='relative w-[280px] h-[40px]'>
            <input className='w-full bg-main-blue px-[16px] py-[10px] rounded-[8px] text-white text-[14px] outline-none
                placeholder:text-white placeholder:opacity-[0.5]' placeholder={props.placeholder}
                onChange={handleOnChange} value={value}
            />
            {
                props.checkMark === 'loading'
                    ? <LoadingIcon className='animate-spin -ml-1 mr-3 h-5 w-5 text-white absolute top-[10px] right-[0px]'/>
                : props.checkMark === 'loaded'
                    ? <img 
                        style={{display: props.checkMark}} className='absolute top-[14px] right-[12px]' 
                        src='images/checkMark.png' alt=''
                    />
                : null
            }
            
        </div>
    );
};

const Urn = (props) => {
    const [selectedLeft, setSelectedLeft] = useState(1);
    const [selectedRight, setSelectedRight] = useState(0);
    const [leftCheckMark, setLeftCheckMark] = useState('none');
    const [rightCheckMark, setRightCheckMark] = useState('none');
    const [leftName, setLeftName] = useState('Пластик');
    const [rightName, setRightName] = useState('Бумага');
    return (
        <div className='flex flex-row gap-[22px]'>
            <div className='w-5/12'>
                <div className='flex flex-col gap-[24px] mb-[24px]'>
                    <div className='text-[18px] font-medium text-white mb-[10px]'>Режимы</div>
                    {urnNames(props)}
                </div>
            </div>
            <div className='w-7/12'>
                <div className='text-[18px] font-medium text-white mb-[34px]'>Параметры</div>
                <div className='text-[16px] font-medium text-white mb-[16px]'>Заполненность урны</div>
                <div className='flex flex-row gap-[30px] mb-[44px]'>
                    <div className='text-white text-[14px] pt-[6px]'>{leftName}</div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <div className='w-[72px] h-[32px] rounded-[8px] bg-[#bbbbc2] p-[2px]'>
                            <div 
                                style={{width: deviceInfo[1].leftWidth, background: colors[selectedLeft]}}
                                className='w-full h-full rounded-[7px]'></div>
                        </div>
                        <div className='text-white text-[14px]'>{deviceInfo[1].leftWidth}</div>
                    </div>
                    <div className='text-white text-[14px] pt-[6px]'>{rightName}</div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <div className='w-[72px] h-[32px] rounded-[8px] bg-[#bbbbc2] p-[2px]'>
                            <div 
                                style={{width: deviceInfo[1].rightWidth, background: colors[selectedRight]}}
                                className='w-full h-full rounded-[7px]'></div>
                        </div>
                        <div className='text-white text-[14px]'>{deviceInfo[1].rightWidth}</div>
                    </div>
                </div>
                <div className='text-[16px] font-medium text-white mb-[16px]'>Название баков</div>
                <div className='flex flex-row gap-[30px] items-center mb-[8px]'>
                    <div className='text-white text-[14px]'>Бак №1</div>
                    <Input
                        placeholder='Название бака' 
                        value={leftName}
                        checkMark={leftCheckMark} 
                        setCheckMark={setLeftCheckMark} 
                        name={leftName} 
                        setName={setLeftName}
                    />
                </div>
                <div className='flex flex-row gap-[30px] items-center mb-[58px]'>
                    <div className='text-white text-[14px]'>Бак №2</div>
                    <Input 
                        placeholder='Название бака'
                        value={rightName} 
                        checkMark={rightCheckMark} 
                        setCheckMark={setRightCheckMark} 
                        name={rightName} 
                        setName={setRightName}
                    />
                </div>
                <div className='text-[16px] font-medium text-white mb-[18px]'>Цвета баков</div>
                <table className='mb-[20px]'>
                    <tbody>
                        <tr>
                            <td className='pr-[30px]'>
                                <div className='text-[14px] text-white'>{leftName}</div>
                            </td>
                            <td>
                                <div className='flex flex-row gap-[8px]'>
                                    {colorsLine(selectedLeft, setSelectedLeft, leftName)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='pt-[20px]'>
                                <div className='text-[14px] text-white'>{rightName}</div>
                            </td>
                            <td className='pt-[20px]'>
                                <div className='flex flex-row gap-[8px]'>
                                    {colorsLine(selectedRight, setSelectedRight, rightName)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Settings = (props) => {
    return (
        <div className='relative w-full xl:w-3/4 min-h-[918px] flex flex-col bg-header-blue rounded-[16px] pt-[24px] pb-[92px] px-[16px] mt-[8px]'>
            <div className='text-white text-[18px] font-medium mb-[24px]'>Настройки {deviceInfo[props.id].secondName} №{deviceInfo[props.id].number}</div>
            <div className='flex flex-row gap-[22px] mb-[32px]'>
                <div className='w-5/12 h-[180px] rounded-[8px] overflow-hidden'><Map markers={deviceInfo[props.id].markers}/></div>
                <div className='w-7/12 flex flex-col'>
                    <div className='font-medium text-white text-[16px] mb-[8px]'>Адрес установки:</div>
                    <div className='text-[14px] text-text-gray mb-[24px]'>{deviceInfo[props.id].address}</div>
                    <div className='flex flex-row gap-[8px] mb-[8px]'>
                        <div className='font-medium text-white text-[16px]'>Версия ПО:</div>
                        <div className='font-medium text-text-gray text-[16px]'>{deviceInfo[props.id].version}</div>
                    </div>
                    <div className='font-medium text-text-blue text-[14px] mb-[24px]'>ОБНОВИТЬ</div>
                    <div className='flex flex-row items-center gap-[8px]'>
                        <div className='font-medium text-white text-[16px]'>Статус:</div>
                        <Status gradient='from-[#6fff2c] to-[#29eee7]'/>
                    </div>
                </div>
            </div>
            { 
                deviceInfo[props.id].name === 'Скамейка' 
                    ? <Bench settings={deviceInfo[props.id].settings}/>
                : deviceInfo[props.id].name === 'Урна' 
                    ? <Urn settings={deviceInfo[props.id].settings}/>
                : null
            }
            <BlueButton className='absolute left-[16px] bottom-[16px] w-[280px] h-[52px] text-[18px]'>
                Сохранить
            </BlueButton>
            <button 
                onClick={()=>props.setPanel([])}
                className='absolute right-[19px] bottom-[16px] text-[16px] text-text-gray opacity-[0.5]'>
                    Свернуть
            </button>
        </div>
    );
};

export default Settings;