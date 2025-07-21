import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterTeasers.css';

const FooterTeasers = () => {
  const valueProps = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards to protect your data',
      features: ['SSL Certificates', 'GDPR Compliant', '24/7 Monitoring']
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Rapid deployment with our proven development methodology',
      features: ['2x Faster', 'Agile Process', 'Quick Turnaround']
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance whenever you need it',
      features: ['Live Chat', 'Phone Support', 'Expert Team']
    }
  ];

  return (
    <section className="footer-teasers-modern">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Section Header */}
            <div className="teasers-header">
              <h2 className="teasers-title">
                Why Choose <span className="title-accent">CoaTech</span>?
              </h2>
              <p className="teasers-subtitle">
                We deliver enterprise-grade solutions with the agility of a startup
              </p>
            </div>

            {/* Value Propositions Grid */}
            <Row className="value-props-grid">
              {valueProps.map((prop, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <div className="value-prop-card" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="prop-icon-container">
                      <div className="prop-icon">{prop.icon}</div>
                    </div>
                    
                    <div className="prop-content">
                      <h3 className="prop-title">{prop.title}</h3>
                      <p className="prop-description">{prop.description}</p>
                      
                      <ul className="prop-features">
                        {prop.features.map((feature, idx) => (
                          <li key={idx} className="prop-feature">
                            <span className="feature-check">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="prop-hover-overlay">
                      <Link to="/services" className="prop-cta">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Bottom CTA */}
            <div className="teasers-cta">
              <h3 className="cta-title">Ready to Transform Your Business?</h3>
              <p className="cta-subtitle">Join 200+ companies that trust CoaTech with their digital future</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-primary">
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="cta-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterTeasers;
