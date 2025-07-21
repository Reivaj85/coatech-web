import './Button.css'

// Base Button component with variants
export const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classes} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// Specific button variants as separate exports
export const PrimaryButton = (props) => <Button variant="primary" {...props} />
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />
export const OutlineButton = (props) => <Button variant="outline" {...props} />
export const LightButton = (props) => <Button variant="light" {...props} />

// Size variants
export const SmallButton = (props) => <Button size="small" {...props} />
export const LargeButton = (props) => <Button size="large" {...props} />

export default Button
