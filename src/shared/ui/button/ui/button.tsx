import React, { FC } from "react";
import cn from 'classnames'

import './button.css'

import {Text} from '@/shared/ui/text'

export interface ButtonProps {
    children: React.ReactNode
    on_click_action?: () => void
    disabled?: boolean
    custom_classnames?: string[] | string
    submit_button?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {children, on_click_action, disabled, custom_classnames, submit_button} = props

    return (
        <button type={submit_button ? 'submit' : 'button'} className={cn('btn-reset', 'btn', custom_classnames)}
        disabled={disabled}
        onClick={on_click_action}>
            <Text typo={"secondary_sbold"} as={'p'} align={'center'}>
                {children}
            </Text>
        </button>
    )
}
