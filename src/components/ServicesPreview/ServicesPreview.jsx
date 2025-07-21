import { Row, Col } from 'react-bootstrap'
import { useLanguage } from '../../hooks/useLanguage'
import { FeatureCard, Icon } from '../../design-system'
import './ServicesPreview.css'

const ServicesPreview = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Icon name="laptop" size="2xl" color="#007bff" />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      color: '#007bff'
    },
    {
      icon: <Icon name="phone" size="2xl" color="#28a745" />,
      title: t('services.mobileApp.title'),
      description: t('services.mobileApp.description'),
      color: '#28a745'
    },
    {
      icon: <Icon name="bullseye" size="2xl" color="#ffc107" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      color: '#ffc107'
    },
    {
      icon: <Icon name="palette" size="2xl" color="#dc3545" />,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
      color: '#dc3545'
    },
    {
      icon: <Icon name="gear" size="2xl" color="#6f42c1" />,
      title: t('services.devops.title'),
      description: t('services.devops.description'),
      color: '#6f42c1'
    },
    {
      icon: <Icon name="tools" size="2xl" color="#20c997" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      color: '#20c997'
    }
  ]

  return (
    <Row className="services-preview">
      {services.map((service, index) => (
        <Col lg={4} md={6} className="mb-4" key={index}>
          <FeatureCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonText={t('common.learnMore')}
            elevation="medium"
            className="h-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onButtonClick={() => {
              // Navigate to services page or specific service
              console.log(`Learn more about ${service.title}`)
            }}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ServicesPreview
