import './Icon.css'

// Base Icon component that can handle different icon systems
export const Icon = ({ 
  name,
  size = 'medium',
  color = 'currentColor',
  className = '',
  type = 'bootstrap', // bootstrap, custom, svg
  ...props 
}) => {
  const classes = [
    'ds-icon',
    `ds-icon--${size}`,
    type === 'bootstrap' && `bi bi-${name}`,
    className
  ].filter(Boolean).join(' ')

  // For Bootstrap Icons
  if (type === 'bootstrap') {
    return (
      <i 
        className={classes} 
        style={{ color }}
        {...props}
      />
    )
  }

  // For custom SVG icons or other types
  return (
    <span 
      className={classes} 
      style={{ color }}
      {...props}
    >
      {name}
    </span>
  )
}

// Common icon components using Bootstrap Icons
export const ChevronRightIcon = (props) => <Icon name="chevron-right" {...props} />
export const ChevronLeftIcon = (props) => <Icon name="chevron-left" {...props} />
export const CheckIcon = (props) => <Icon name="check" {...props} />
export const XIcon = (props) => <Icon name="x" {...props} />
export const ArrowRightIcon = (props) => <Icon name="arrow-right" {...props} />
export const ArrowLeftIcon = (props) => <Icon name="arrow-left" {...props} />
export const StarIcon = (props) => <Icon name="star" {...props} />
export const HeartIcon = (props) => <Icon name="heart" {...props} />
export const UserIcon = (props) => <Icon name="person" {...props} />
export const EmailIcon = (props) => <Icon name="envelope" {...props} />
export const PhoneIcon = (props) => <Icon name="telephone" {...props} />
export const LocationIcon = (props) => <Icon name="geo-alt" {...props} />
export const CalendarIcon = (props) => <Icon name="calendar" {...props} />
export const ClockIcon = (props) => <Icon name="clock" {...props} />
export const SearchIcon = (props) => <Icon name="search" {...props} />
export const MenuIcon = (props) => <Icon name="list" {...props} />
export const GlobeIcon = (props) => <Icon name="globe" {...props} />
export const CodeIcon = (props) => <Icon name="code-slash" {...props} />
export const DeviceIcon = (props) => <Icon name="laptop" {...props} />
export const CloudIcon = (props) => <Icon name="cloud" {...props} />
export const ShieldIcon = (props) => <Icon name="shield-check" {...props} />
export const LightbulbIcon = (props) => <Icon name="lightbulb" {...props} />
export const TrophyIcon = (props) => <Icon name="trophy" {...props} />

// Social media icons
export const FacebookIcon = (props) => <Icon name="facebook" {...props} />
export const TwitterIcon = (props) => <Icon name="twitter" {...props} />
export const LinkedinIcon = (props) => <Icon name="linkedin" {...props} />
export const InstagramIcon = (props) => <Icon name="instagram" {...props} />
export const GithubIcon = (props) => <Icon name="github" {...props} />
export const YoutubeIcon = (props) => <Icon name="youtube" {...props} />

export default Icon
