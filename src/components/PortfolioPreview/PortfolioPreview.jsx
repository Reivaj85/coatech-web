import { Row, Col, Card, Button } from 'react-bootstrap'
import { useLanguage } from '../../hooks/useLanguage'
import './PortfolioPreview.css'

const PortfolioPreview = () => {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=E-Commerce',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with React Native',
      image: 'https://via.placeholder.com/400x250/28a745/ffffff?text=Banking+App',
      tags: ['React Native', 'Express.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Corporate Website',
      description: 'Professional corporate website with CMS integration',
      image: 'https://via.placeholder.com/400x250/ffc107/000000?text=Corporate+Site',
      tags: ['Next.js', 'Strapi', 'AWS'],
      link: '#'
    },
    {
      title: 'AI Dashboard',
      description: 'Analytics dashboard with machine learning insights',
      image: 'https://via.placeholder.com/400x250/dc3545/ffffff?text=AI+Dashboard',
      tags: ['Vue.js', 'Python', 'TensorFlow'],
      link: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property management and listing platform',
      image: 'https://via.placeholder.com/400x250/6f42c1/ffffff?text=Real+Estate',
      tags: ['Angular', 'Django', 'Redis'],
      link: '#'
    },
    {
      title: 'Healthcare System',
      description: 'Patient management system for healthcare providers',
      image: 'https://via.placeholder.com/400x250/20c997/ffffff?text=Healthcare',
      tags: ['React', 'Laravel', 'MySQL'],
      link: '#'
    }
  ]

  return (
    <Row className="portfolio-preview">
      {portfolioItems.slice(0, 6).map((item, index) => (
        <Col lg={4} md={6} className="mb-4" key={index}>
          <Card 
            className="portfolio-card h-100 border-0 shadow-sm"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="portfolio-image-container">
              <Card.Img 
                variant="top" 
                src={item.image} 
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-content">
                  <h5 className="text-white mb-2">{item.title}</h5>
                  <p className="text-white-50 mb-3">{item.description}</p>
                  <Button 
                    variant="light" 
                    size="sm"
                    href={item.link}
                    className="btn-custom"
                  >
                    {t('portfolio.viewProject')}
                  </Button>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="h6 mb-2">{item.title}</Card.Title>
              <Card.Text className="text-muted small mb-3">
                {item.description}
              </Card.Text>
              <div className="portfolio-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge bg-primary me-2 mb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default PortfolioPreview
