import { globalStyle, style } from '@vanilla-extract/css'

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  margin: 0,
})

globalStyle(`${wrapperStyle} p`, {
  fontSize: '3rem',
})

export const buttonStyle = style({})
