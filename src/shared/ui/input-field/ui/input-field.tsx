import React, { FC, useState } from 'react'
import cn from 'classnames'

import './input-field.css'

export interface InputFieldProps {
    placeholder: string
    value?: string
    on_change?: (value: string) => void
    custom_classnames?: string[] | string
}

export const InputField: FC<InputFieldProps> = props => {
    const {
        placeholder,
        value,
        on_change,
        custom_classnames,
    } = props

    const [internalValue, setInternalValue] = useState('')

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (val: string) => {
        if (!isControlled) {
            setInternalValue(val)
        }
        on_change?.(val)
    }

        return (
            <div className={'wrapper'}>
                <input
                    className={cn('input', custom_classnames)}
                    placeholder={placeholder}
                    value={currentValue}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        )
}
