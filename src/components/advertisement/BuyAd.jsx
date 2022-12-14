import React, { useRef, useEffect } from 'react';

import {ReactComponent as ExitIcon} from '../icons/exit.svg';
import Input from '../Input';
import {PinkButton} from '../Button';

const BuyAd = (props) => {
    const input = useRef(null);
    useEffect(() => {
        if (props.files.length===0) {
            props.setIsDisabled?.(true);
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
                    <Input
                        onInput={(e)=>props.setName(e.target.value)}
                        value={props.name}
                        style={{marginBottom: 16, height: 40}}
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
                        ref={input} className='hidden outline-none' type='file' accept="image/gif, image/jpeg" multiple/>
                </button>
                <PinkButton
                    disabled={props.files.length===0}
                    onClick={()=>props.setIsDisabled?.(props.files.length===0)}
                    className='h-[40px] w-[176px] text-[16px]'
                >
                    {props.name.length === 0 ? 'Отправить' : 'Сохранить'}
                </PinkButton>
                <div className='flex flex-col'>
                    <div className='text-[12px] text-white'>Форматы: jpeg, gif.</div>
                    <div className='text-[12px] text-white underline'>Правила</div>
                </div>
            </div>
        </div>
    );
};

export default BuyAd;