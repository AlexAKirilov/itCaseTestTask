import React, { FC } from "react";
import cn from 'classnames'
import './color-pick-button.css'

export interface ColorPickButtonProps {
    color: string,
    on_click: () => void,
    is_selected: boolean,
    disabled?: boolean,
    custom_classnames?: string[] | string
}

export const ColorPickButton: FC<ColorPickButtonProps> = props => {
    const {color, on_click, is_selected, disabled = false, custom_classnames} = props

    return (
        <button className={cn('btn-reset', 'color__btn', {'color__btn-disabled' : disabled}, {'color__btn-selected' : is_selected}, custom_classnames)} onClick={on_click}
        style={{backgroundColor: color}}>
        </button>
    )
}