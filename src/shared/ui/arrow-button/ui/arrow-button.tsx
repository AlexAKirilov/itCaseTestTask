import React, { FC } from 'react'
import cn from 'classnames'
import './arrow-button.css'
import arrow_btn from '@/shared/assets/images/arrow_btn-next.svg'

export interface ArrowButtonProps {
	onClickAction?: () => void
	buttonDirection: 'toNext' | 'toPrevious'
	customClassname?: string
}

export const ArrowButton: FC<ArrowButtonProps> = (props) => {
	const { onClickAction, buttonDirection, customClassname } = props

	return (
		<button
			className={cn(
				'btn-reset',
				'arrow-btn',
				`arrow-btn-${buttonDirection}`,
				customClassname
			)}
			onClick={onClickAction}
		>
			<img src={arrow_btn} alt={'Иконка стрелочной кнопки'} />
		</button>
	)
}
