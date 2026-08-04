import React, { FC, ElementType } from 'react'
import cn from 'classnames'

import './text.css'

export interface TextProps {
	/** Текст, либо svg в тегах svg */
	children: React.ReactNode
	/** Каким тегом отображать текст */
	as?: ElementType
	/** Типографические пресеты */
	typo:
		| 'heading_h1'
		| 'heading_h2'
		| 'heading_h3'
		| 'primary_lg'
		| 'primary_md'
		| 'primary_sm'
		| 'secondary_sbold'
		| 'secondary_reg'
	/** Выравнивание */
	align?: 'left' | 'center' | 'right'
	/** Кастомизация классами */
	custom_classnames?: string[] | string
}

export const Text: FC<TextProps> = (props) => {
	const {
		children,
		as: Tag = 'span',
		typo = 'heading_h1',
		align = 'left',
		custom_classnames = [],
	} = props

	return (
		<Tag className={cn('text', `${typo}`, `${align}`, custom_classnames)}>
			{children}
		</Tag>
	)
}
