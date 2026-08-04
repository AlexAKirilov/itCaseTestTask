import React, { FC } from 'react'
import cn from 'classnames'
import './arrow-button.css'
import arrow_btn from '@/shared/assets/images/arrow_btn-next.svg'

export interface ArrowButtonProps {
	on_click_action?: () => void
	button_direction: 'to_next' | 'to_previous'
	custom_classnames?: string[] | string
}

export const ArrowButton: FC<ArrowButtonProps> = (props) => {
	const { on_click_action, button_direction, custom_classnames } = props

	return (
		<button
			className={cn(
				'btn-reset',
				'arrow-btn',
				`arrow-btn-${button_direction}`,
				custom_classnames
			)}
			onClick={on_click_action}
		>
			<img src={arrow_btn} alt={'Иконка стрелочной кнопки'} />
		</button>
	)
}
