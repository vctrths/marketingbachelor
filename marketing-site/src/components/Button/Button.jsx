import './Button.css'

export default function Button({ children, variant = 'primary', rounded = false, fullWidth = false, className = '', onClick }) {
  const classes = [
    'button',
    `button--${variant}`,
    rounded && 'button--rounded',
    fullWidth && 'button--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <button className={classes} onClick={onClick}>{children}</button>
}
