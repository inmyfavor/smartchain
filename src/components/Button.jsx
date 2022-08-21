import React from 'react';

import classNames from 'classnames';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={classNames('flex justify-center items-center rounded-[8px] bg-gradient-to-br text-white font-medium', {
                [props.disabledColor]: props.isDisabled,
                [props.enabledColor]: !props.isDisabled,
                'transition-all hover:brightness-[.90]': !props.disabled
            }, props.className)}
        >
            {props.children}
        </button>
    );
}

export const PinkButton = (props) => {
    return (
        <Button
            disabledColor='from-[#363244] to-[#36274f] text-[#a8a9bc]'
            enabledColor='from-[#ffe555] to-[#fa5ddb]'
            {...props}
        />
    );
};

export const GreenButton = (props) => {
    return (
        <Button enabledColor='from-[#3aed97] to-[#00ffe0]' {...props}/>
    );
};

export const RedButton = (props) => {
    return (
        <Button enabledColor='from-[#ff7285] to-[#ff8b59]' {...props}/>
    );
};

export const BlueButton = (props) => {
    return (
        <Button enabledColor='from-[#7093ff] to-[#5bf0ee]' {...props}/>
    );
};

const OutlineButton = (props) => {
    return (
        <div
            onClick={props.onClick}
            className={classNames('p-[1px] bg-gradient-to-br rounded-[8px] text-[16px]', props.className, props.color)}
        >
            <button className={classNames('flex items-center justify-center w-full h-full text-white font-medium rounded-[8px]', props.bgColor)}>
                {props.children}
            </button>
        </div>
    );
};

export const GreenOutlineButton = (props) => {
    return (
        <OutlineButton color='from-[#3aed97] to-[#00ffe0]' bgColor='bg-main-blue' {...props}/>
    );
};

export const PinkOutlineButton = (props) => {
    return (
        <OutlineButton color='from-[#ffe555] to-[#fa5ddb]' bgColor='bg-dark-blue' {...props}/>
    );
};

export const BlueOutlineButton = (props) => {
    return (
        <OutlineButton color='from-[#7093ff] to-[#5bf0ee]' bgColor='bg-dark-blue' {...props}/>
    );
};