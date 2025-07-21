import { Card, CardHeader, CardBody, CardFooter, Button, Typography } from '../atoms'
import './CardWithButton.css'

// CardWithButton molecule - combines Card and Button atoms
export const CardWithButton = ({ 
  title,
  children,
  buttonText,
  buttonVariant = 'primary',
  buttonSize = 'medium',
  onButtonClick,
  buttonProps = {},
  cardProps = {},
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  className = '',
  ...props 
}) => {
  const classes = [
    'ds-card-with-button',
    className
  ].filter(Boolean).join(' ')

  return (
    <Card className={classes} {...cardProps} {...props}>
      {title && (
        <CardHeader {...headerProps}>
          <Typography variant="h5" weight="semibold">
            {title}
          </Typography>
        </CardHeader>
      )}
      
      <CardBody {...bodyProps}>
        {children}
      </CardBody>
      
      {buttonText && (
        <CardFooter {...footerProps}>
          <Button 
            variant={buttonVariant}
            size={buttonSize}
            onClick={onButtonClick}
            {...buttonProps}
          >
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

// Specific variants
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  buttonText = "Learn More",
  ...props 
}) => (
  <CardWithButton
    title={
      <div className="ds-feature-card__title">
        {icon && <span className="ds-feature-card__icon">{icon}</span>}
        {title}
      </div>
    }
    buttonText={buttonText}
    hover={true}
    {...props}
  >
    <Typography variant="body" color="secondary">
      {description}
    </Typography>
  </CardWithButton>
)

export const ServiceCard = ({ 
  title, 
  description, 
  price, 
  features = [],
  buttonText = "Get Started",
  ...props 
}) => (
  <CardWithButton
    title={title}
    buttonText={buttonText}
    elevation="large"
    hover={true}
    {...props}
  >
    <div className="ds-service-card__content">
      {price && (
        <Typography variant="h3" weight="bold" color="brand" className="ds-service-card__price">
          {price}
        </Typography>
      )}
      
      {description && (
        <Typography variant="body" color="secondary" className="ds-service-card__description">
          {description}
        </Typography>
      )}
      
      {features.length > 0 && (
        <ul className="ds-service-card__features">
          {features.map((feature, index) => (
            <li key={index} className="ds-service-card__feature">
              <Typography variant="body">{feature}</Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  </CardWithButton>
)

export const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  author, 
  image,
  buttonText = "Read More",
  ...props 
}) => (
  <CardWithButton
    title={title}
    buttonText={buttonText}
    padding="none"
    hover={true}
    {...props}
  >
    <div className="ds-blog-card__content">
      {image && (
        <div className="ds-blog-card__image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="ds-blog-card__body">
        {excerpt && (
          <Typography variant="body" color="secondary" className="ds-blog-card__excerpt">
            {excerpt}
          </Typography>
        )}
        
        <div className="ds-blog-card__meta">
          {date && (
            <Typography variant="caption" color="muted">
              {date}
            </Typography>
          )}
          {author && (
            <Typography variant="caption" color="muted">
              by {author}
            </Typography>
          )}
        </div>
      </div>
    </div>
  </CardWithButton>
)

export default CardWithButton
