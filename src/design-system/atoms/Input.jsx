import './Input.css'

// Base Input component
export const Input = ({ 
  variant = 'default',
  size = 'medium',
  error = false,
  success = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'ds-input',
    `ds-input--${variant}`,
    `ds-input--${size}`,
    error && 'ds-input--error',
    success && 'ds-input--success',
    disabled && 'ds-input--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <input 
      className={classes} 
      disabled={disabled}
      {...props}
    />
  )
}

// Textarea component
export const Textarea = ({ 
  variant = 'default',
  size = 'medium',
  error = false,
  success = false,
  disabled = false,
  className = '',
  rows = 4,
  ...props 
}) => {
  const classes = [
    'ds-input',
    'ds-textarea',
    `ds-input--${variant}`,
    `ds-input--${size}`,
    error && 'ds-input--error',
    success && 'ds-input--success',
    disabled && 'ds-input--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <textarea 
      className={classes} 
      disabled={disabled}
      rows={rows}
      {...props}
    />
  )
}

// Select component
export const Select = ({ 
  variant = 'default',
  size = 'medium',
  error = false,
  success = false,
  disabled = false,
  className = '',
  children,
  ...props 
}) => {
  const classes = [
    'ds-input',
    'ds-select',
    `ds-input--${variant}`,
    `ds-input--${size}`,
    error && 'ds-input--error',
    success && 'ds-input--success',
    disabled && 'ds-input--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <select 
      className={classes} 
      disabled={disabled}
      {...props}
    >
      {children}
    </select>
  )
}

// Input variants
export const OutlineInput = (props) => <Input variant="outline" {...props} />
export const FilledInput = (props) => <Input variant="filled" {...props} />
export const UnderlineInput = (props) => <Input variant="underline" {...props} />

// Size variants
export const SmallInput = (props) => <Input size="small" {...props} />
export const LargeInput = (props) => <Input size="large" {...props} />

export default Input
