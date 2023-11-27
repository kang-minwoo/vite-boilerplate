import { style } from '@vanilla-extract/css'

export const loadingStyle = style({
  backgroundColor: '#242424',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.6rem',
})

export const loadingTextStyle = style({
  color: '#fff',
  margin: 0,
  fontSize: '1.6rem',
})
