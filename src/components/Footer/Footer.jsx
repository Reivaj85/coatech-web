import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' }
  ]

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' }
  ]

  const serviceLinks = [
    { name: t('services.webDev.title'), path: '/services' },
    { name: t('services.mobileApp.title'), path: '/services' },
    { name: t('services.consulting.title'), path: '/services' },
    { name: t('services.uiux.title'), path: '/services' }
  ]

  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row className="py-5">
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-gradient mb-3">CoaTech</h5>
            <p className="mb-3">
              {t('footer.description')}
            </p>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">{t('footer.quickLinks')}</h6>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="mb-3">{t('footer.services')}</h6>
            <ul className="footer-links">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="mb-3">{t('nav.contact')}</h6>
            <div className="contact-info">
              <p className="mb-2">
                <i className="bi bi-geo-alt"></i> {t('contact.info.address')}
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone"></i> {t('contact.info.phone')}
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope"></i> {t('contact.info.email')}
              </p>
              <p className="mb-0">
                <i className="bi bi-clock"></i> {t('contact.info.hours')}
              </p>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="border-top border-secondary py-3">
          <Col className="text-center">
            <p className="mb-0">
              {t('footer.copyright').replace('2025', currentYear)}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
