import { style } from '@vanilla-extract/css'

export const wrapperStyle = style({
  fontSize: '1.6rem',
})

export const flexColStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '1rem',
  padding: '1rem',
  borderBottom: '1px solid #fff',
})

export const gridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  marginBottom: '1rem',
  padding: '2rem',
})
