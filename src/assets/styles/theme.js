/**
 * Make all colors normal hex (6 letters) for consistent
 * transparency usage across the app
 *
 * ex ${accent}77
 */

const constant = {
	// itemHoverShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)"
}

export const bitblue = {
	...constant,
	accent: '#007bed',
	accentVariant: '#86c5ff',
	bg: '#0a192f',
	bgVariant: '#172A45',
	bgPage: '#f5faff',
	font: '#000000',
	offFont: '#ebebeb',
	fontInvert: '#ffffff'
}

export const palepink = {
	...constant,
	accent: '#db7093',
	accentVariant: '#ffb5cd',
	bg: '#320b18',
	bgVariant: '#451726',
	bgPage: '#fff5ff',
	font: '#000000',
	offFont: '#ebebeb',
	fontInvert: '#ffffff'
}

export const black = {
	...constant,
	accent: '#565656',
	accentVariant: '#787878',
	bg: '#121212',
	bgVariant: '#232323',
	bgPage: '#efefef',
	font: '#000000',
	offFont: '#ebebeb',
	fontInvert: '#ffffff'
}

export default bitblue
