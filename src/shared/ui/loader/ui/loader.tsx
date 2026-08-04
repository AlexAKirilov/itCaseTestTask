import React, {FC} from "react";
import cn from 'classnames'

import './loader.css'

export interface LoaderProps {
    customClassnames?: string[] | string
}

export const Loader:FC<LoaderProps> = props => {
    const {customClassnames} = props

    return (
        <div className={cn('loader__wrapper')}>
            <svg
                className={cn('loader', customClassnames)}
                viewBox="0 0 24 24"
            >
                <circle className="spinner_nOfF" cx="4" cy="12" r="3" fill="currentColor"/>
                <circle className="spinner_nOfF spinner_fVhf" cx="4" cy="12" r="3" fill="currentColor"/>
                <circle className="spinner_nOfF spinner_piVe" cx="4" cy="12" r="3" fill="currentColor"/>
                <circle className="spinner_nOfF spinner_MSNs" cx="4" cy="12" r="3" fill="currentColor"/>
            </svg>
        </div>
    )
}