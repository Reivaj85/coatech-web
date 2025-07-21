import './Typography.css'

// Base Typography component
export const Typography = ({ 
  variant = 'body', 
  size = 'medium',
  weight = 'normal',
  color = 'primary',
  children, 
  className = '', 
  as: Component = 'p',
  ...props 
}) => {
  const classes = [
    'ds-typography',
    `ds-typography--${variant}`,
    `ds-typography--${size}`,
    `ds-typography--weight-${weight}`,
    `ds-typography--color-${color}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

// Semantic heading components
export const Heading1 = (props) => <Typography variant="h1" as="h1" {...props} />
export const Heading2 = (props) => <Typography variant="h2" as="h2" {...props} />
export const Heading3 = (props) => <Typography variant="h3" as="h3" {...props} />
export const Heading4 = (props) => <Typography variant="h4" as="h4" {...props} />
export const Heading5 = (props) => <Typography variant="h5" as="h5" {...props} />
export const Heading6 = (props) => <Typography variant="h6" as="h6" {...props} />

// Text components
export const BodyText = (props) => <Typography variant="body" as="p" {...props} />
export const Caption = (props) => <Typography variant="caption" as="span" {...props} />
export const Lead = (props) => <Typography variant="lead" as="p" {...props} />
export const Small = (props) => <Typography variant="small" as="small" {...props} />

// Display text
export const DisplayText = (props) => <Typography variant="display" as="h1" {...props} />

export default Typography
