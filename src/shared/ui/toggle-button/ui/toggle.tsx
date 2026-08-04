import React, { FC, useState } from 'react'
import cn from 'classnames'

import './toggle.css'
import {Text} from "@/shared/ui/text";

export interface ToggleButtonProps {
	text?: string

	defaultState?: boolean

	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void

	classname?: string[]
}

export const Toggle: FC<ToggleButtonProps> = (props) => {
	const { text, defaultState = false, classname = [], onClick } = props

	const [isActive, setActive] = useState(defaultState)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setActive(!isActive)
		onClick?.(e)
	}

	return (
		<div className={cn('toggle', classname)}>
			{text &&
			<Text typo={"primary_sm"} align={"center"}>
				{text}
			</Text>}
			<div
				className={cn(
					'toggle-button',
					`toggle-active-${isActive}`,
					...classname
				)}
				onClick={handleClick}
			>
				<div className={cn('toggle-button-marker')} />
			</div>
		</div>
	)
}
