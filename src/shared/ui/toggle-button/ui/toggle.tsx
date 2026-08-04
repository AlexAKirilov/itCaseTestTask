import React, { FC, useState } from 'react'
import cn from 'classnames'

import './toggle.css'
import {Text} from "@/shared/ui/text";

export interface ToggleButtonProps {
	text?: string
	default_state?: boolean
	on_click?: (e: React.MouseEvent<HTMLDivElement>) => void
	custom_classnames?: string[] | string
}

export const Toggle: FC<ToggleButtonProps> = (props) => {
	const { text, default_state = false, custom_classnames = [], on_click } = props

	const [isActive, setActive] = useState(default_state)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setActive(!isActive)
		on_click?.(e)
	}

	return (
		<div className={cn('toggle', custom_classnames)}>
			{text &&
			<Text typo={"primary_sm"} align={"center"}>
				{text}
			</Text>}
			<div
				className={cn(
					'toggle-button',
					`toggle-active-${isActive}`,
					custom_classnames
				)}
				onClick={handleClick}
			>
				<div className={cn('toggle-button-marker')} />
			</div>
		</div>
	)
}
