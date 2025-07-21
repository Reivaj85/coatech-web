import './Card.css'

// Base Card component
export const Card = ({ 
  variant = 'default',
  elevation = 'medium',
  padding = 'medium',
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const classes = [
    'ds-card',
    `ds-card--${variant}`,
    `ds-card--elevation-${elevation}`,
    `ds-card--padding-${padding}`,
    hover && 'ds-card--hover',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Card variants
export const DefaultCard = (props) => <Card variant="default" {...props} />
export const BorderlessCard = (props) => <Card variant="borderless" {...props} />
export const OutlineCard = (props) => <Card variant="outline" {...props} />
export const GlassCard = (props) => <Card variant="glass" {...props} />

// Card with built-in hover effect
export const HoverCard = (props) => <Card hover={true} {...props} />

// Card Header component
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`ds-card__header ${className}`} {...props}>
    {children}
  </div>
)

// Card Body component
export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`ds-card__body ${className}`} {...props}>
    {children}
  </div>
)

// Card Footer component
export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`ds-card__footer ${className}`} {...props}>
    {children}
  </div>
)

export default Card
