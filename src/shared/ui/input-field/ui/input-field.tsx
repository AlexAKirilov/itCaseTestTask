import React, { FC, useState, useEffect, useMemo } from 'react'
import cn from 'classnames'

import './input-field.css'

export interface InputFieldProps {
    placeholder: string
    value?: string
    onChange?: (value: string) => void
    customClassnames?: string[] | string
}

export const InputField: FC<InputFieldProps> = props => {
    const {
        placeholder,
        value,
        onChange,
        customClassnames,
    } = props

    const [internalValue, setInternalValue] = useState('')

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (val: string) => {
        if (!isControlled) {
            setInternalValue(val)
        }
        onChange?.(val)
    }

        return (
            <div className={'wrapper'}>
                <input
                    className={cn('input', customClassnames)}
                    placeholder={placeholder}
                    value={currentValue}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        )
}