import { Typography, Input, Textarea, Select } from '../atoms'
import './FormGroup.css'

// Base FormGroup molecule
export const FormGroup = ({ 
  label,
  children,
  error,
  success,
  helperText,
  required = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'ds-form-group',
    error && 'ds-form-group--error',
    success && 'ds-form-group--success',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {label && (
        <Typography 
          variant="body" 
          weight="medium" 
          className="ds-form-group__label"
          as="label"
        >
          {label}
          {required && <span className="ds-form-group__required">*</span>}
        </Typography>
      )}
      
      <div className="ds-form-group__input">
        {children}
      </div>
      
      {(helperText || error) && (
        <Typography 
          variant="caption" 
          color={error ? 'danger' : 'secondary'}
          className="ds-form-group__helper"
        >
          {error || helperText}
        </Typography>
      )}
    </div>
  )
}

// Specific FormGroup variants with built-in inputs
export const InputGroup = ({ 
  label, 
  error, 
  success, 
  helperText, 
  required,
  inputProps = {},
  ...props 
}) => (
  <FormGroup 
    label={label} 
    error={error} 
    success={success} 
    helperText={helperText}
    required={required}
    {...props}
  >
    <Input 
      error={!!error} 
      success={!!success}
      required={required}
      {...inputProps} 
    />
  </FormGroup>
)

export const TextareaGroup = ({ 
  label, 
  error, 
  success, 
  helperText, 
  required,
  textareaProps = {},
  ...props 
}) => (
  <FormGroup 
    label={label} 
    error={error} 
    success={success} 
    helperText={helperText}
    required={required}
    {...props}
  >
    <Textarea 
      error={!!error} 
      success={!!success}
      required={required}
      {...textareaProps} 
    />
  </FormGroup>
)

export const SelectGroup = ({ 
  label, 
  error, 
  success, 
  helperText, 
  required,
  children,
  selectProps = {},
  ...props 
}) => (
  <FormGroup 
    label={label} 
    error={error} 
    success={success} 
    helperText={helperText}
    required={required}
    {...props}
  >
    <Select 
      error={!!error} 
      success={!!success}
      required={required}
      {...selectProps}
    >
      {children}
    </Select>
  </FormGroup>
)

export default FormGroup
