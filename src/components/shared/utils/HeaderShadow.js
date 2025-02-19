import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded'

const ShadowWrapper = styled.div`
	height: 4em;
	position: absolute;
	left: 0;
	right: 0;
	overflow: hidden;
	text-align: center;
	pointer-events: none;
	${props =>
		props.reverse &&
		`transform: scaleY(-1);
    bottom: 0;
  `}
`
const Shadow = styled.div`
	display: block;
	width: 88%;
	height: 2em;
	margin: -2em auto 0;
	border-radius: 8em / 1em;
	box-shadow: 0px 4px 1.5em rgba(0, 0, 0, 0.2);
	opacity: 0;
`

const UpArrow = styled(KeyboardArrowUpRoundedIcon)`
	font-size: 333% !important;
	transition: 0.1s ease all !important;
	color: #999;
`

/**
 * Needs the scroll container for reference
 * make sure this shadow is in the header container
 * the header container must have a position property
 *
 * see content.js under learn for an example
 */
const HeaderShadow = ({ containerRef, type, reverse }) => {
	const shadowRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		handleShadow()

		container.addEventListener('scroll', handleShadow)
		return () => {
			container.removeEventListener('scroll', handleShadow)
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const container = containerRef.current
		if (reverse) {
			if (container.clientHeight === container.scrollHeight) {
				shadowRef.current.style.opacity = 0
			} else if (container.clientHeight < container.scrollHeight) {
				shadowRef.current.style.opacity = 1
			}
		}
	})

	const handleShadow = () => {
		const container = containerRef.current
		const shadow = shadowRef.current
		if (!reverse) {
			let scrollTop = container.scrollTop / 15
			shadow.style.opacity = scrollTop > 1 ? 1 : scrollTop
		} else {
			let scrollBot =
				(container.scrollHeight -
					container.clientHeight -
					container.scrollTop) /
				15
			shadow.style.opacity = scrollBot > 1 ? 1 : scrollBot
		}
	}

	const selectHeaderShadow = () => {
		switch (type) {
			case 'arrow':
				return <UpArrow ref={shadowRef} className="transition-short" />

			default:
				return <Shadow ref={shadowRef} className="transition-short" />
		}
	}

	return (
		<>
			<ShadowWrapper reverse={reverse}>{selectHeaderShadow()}</ShadowWrapper>
		</>
	)
}

export default HeaderShadow
