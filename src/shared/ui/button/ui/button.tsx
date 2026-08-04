import React, { FC } from "react";
import cn from 'classnames'

import './button.css'

import {Text, TextProps} from '@/shared/ui/text'

export interface ButtonProps {
    children: React.ReactNode
    onClickAction?: () => void
    disabled?: boolean
    customClassnames?: string[] | string
    submitButton?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {children, onClickAction, disabled, customClassnames, submitButton} = props

    return (
        <button type={submitButton ? 'submit' : 'button'} className={cn('btn-reset', 'btn', customClassnames)}
        disabled={disabled}
        onClick={onClickAction}>
            <Text typo={"secondary_sbold"} as={'p'} align={'center'}>
                {children}
            </Text>
        </button>
    )
}