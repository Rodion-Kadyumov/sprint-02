import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton