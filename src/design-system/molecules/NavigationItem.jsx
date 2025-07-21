import { Button, Typography, Icon } from '../atoms'
import './NavigationItem.css'

// NavigationItem molecule
export const NavigationItem = ({ 
  to,
  children,
  active = false,
  variant = 'default',
  icon,
  className = '',
  onClick,
  ...props 
}) => {
  const classes = [
    'ds-nav-item',
    `ds-nav-item--${variant}`,
    active && 'ds-nav-item--active',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <Icon name={icon} size="small" />}
      <Typography variant="body" weight={active ? 'semibold' : 'normal'}>
        {children}
      </Typography>
    </>
  )

  // If it's a link
  if (to) {
    return (
      <a 
        href={to} 
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    )
  }

  // If it's a button-like item
  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

// Navigation dropdown item
export const NavigationDropdownItem = ({ 
  to,
  children,
  icon,
  className = '',
  onClick,
  ...props 
}) => {
  const classes = [
    'ds-nav-dropdown-item',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <Icon name={icon} size="small" />}
      <Typography variant="body">
        {children}
      </Typography>
    </>
  )

  if (to) {
    return (
      <a 
        href={to} 
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

// Navigation brand/logo
export const NavigationBrand = ({ 
  to = '/',
  logo,
  title,
  className = '',
  ...props 
}) => {
  const classes = [
    'ds-nav-brand',
    className
  ].filter(Boolean).join(' ')

  return (
    <a href={to} className={classes} {...props}>
      {logo && (
        <img 
          src={logo} 
          alt={title || 'Logo'} 
          className="ds-nav-brand__logo"
        />
      )}
      {title && (
        <Typography variant="h5" weight="bold" color="brand">
          {title}
        </Typography>
      )}
    </a>
  )
}

// Navigation toggle button (for mobile)
export const NavigationToggle = ({ 
  onClick,
  isOpen = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'ds-nav-toggle',
    isOpen && 'ds-nav-toggle--open',
    className
  ].filter(Boolean).join(' ')

  return (
    <Button
      variant="outline"
      size="small"
      className={classes}
      onClick={onClick}
      {...props}
    >
      <Icon name={isOpen ? 'x' : 'list'} />
    </Button>
  )
}

export default NavigationItem
