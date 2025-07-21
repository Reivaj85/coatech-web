import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../../design-system/atoms/Button';
import './HeroSection.css';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section-modern">
      {/* Enhanced animated background with mouse parallax */}
      <div 
        className="hero-background-modern"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="hero-gradient-modern"></div>
        <div 
          className="hero-pattern-modern"
          style={{
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="geometric-shapes-container">
          <div 
            className="floating-shape shape-1"
            style={{
              transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.03}px) rotate(${scrollY * 0.1}deg)`
            }}
          ></div>
          <div 
            className="floating-shape shape-2"
            style={{
              transform: `translate(${mousePos.x * -0.03}px, ${mousePos.y * 0.04}px) rotate(${scrollY * -0.05}deg)`
            }}
          ></div>
          <div 
            className="floating-shape shape-3"
            style={{
              transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * -0.02}px) rotate(${scrollY * 0.08}deg)`
            }}
          ></div>
        </div>
      </div>

      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Column - Enhanced Content */}
          <Col lg={6}>
            <div className={`hero-content-modern ${isVisible ? 'animate-in' : ''}`}>
              {/* Premium Trust Badge */}
              <div className="hero-badge-modern">
                <span className="badge-icon-modern">🚀</span>
                <span className="badge-text-modern">{t('hero.badge')}</span>
              </div>

              {/* More impactful headline */}
              <h1 className="hero-headline-modern">
                {t('hero.title')}
                <span className="headline-accent-modern"> {t('hero.titleAccent1')} </span>
                {t('hero.titleSecond')}
                <span className="headline-accent-modern"> {t('hero.titleAccent2')} </span>
              </h1>

              {/* Enhanced subtext */}
              <p className="hero-subtext-modern">
                {t('hero.subtitle')}
                <br />
                <strong>{t('hero.subtitleBold')}</strong> {t('hero.subtitleEnd')}
              </p>

              {/* Enhanced CTA section */}
              <div className="hero-actions-modern">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="cta-primary-modern"
                  as={Link}
                  to="/services"
                >
                  <span className="cta-icon">⚡</span>
                  {t('hero.ctaPrimary')}
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="cta-secondary-modern"
                  as={Link}
                  to="/demo"
                >
                  <span className="cta-icon">📹</span>
                  {t('hero.ctaSecondary')}
                </Button>
              </div>

              {/* Enhanced metrics with icons */}
              <div className="metrics-grid-modern">
                <div className="metric-card-modern" style={{animationDelay: '0.2s'}}>
                  <div className="metric-icon-modern">📈</div>
                  <div className="metric-value-modern">{t('hero.metrics.roi.value')}</div>
                  <div className="metric-label-modern">{t('hero.metrics.roi.label')}</div>
                </div>
                <div className="metric-card-modern" style={{animationDelay: '0.4s'}}>
                  <div className="metric-icon-modern">⚡</div>
                  <div className="metric-value-modern">{t('hero.metrics.speed.value')}</div>
                  <div className="metric-label-modern">{t('hero.metrics.speed.label')}</div>
                </div>
                <div className="metric-card-modern" style={{animationDelay: '0.6s'}}>
                  <div className="metric-icon-modern">🌟</div>
                  <div className="metric-value-modern">{t('hero.metrics.uptime.value')}</div>
                  <div className="metric-label-modern">{t('hero.metrics.uptime.label')}</div>
                </div>
              </div>

              {/* Social proof logos */}
              <div className="social-proof-modern">
                <p className="social-proof-text">{t('hero.socialProof')}</p>
                <div className="company-logos">
                  <div className="logo-placeholder">Microsoft</div>
                  <div className="logo-placeholder">Google</div>
                  <div className="logo-placeholder">Amazon</div>
                  <div className="logo-placeholder">IBM</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column - Enhanced 3D Illustration */}
          <Col lg={6}>
            <div className={`hero-visual-modern ${isVisible ? 'animate-in' : ''}`}>
              <div className="visual-container-modern">
                {/* Enhanced 3D Abstract Shapes */}
                <div 
                  className="shape-3d-modern shape-primary-modern"
                  style={{
                    transform: `translate3d(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px, 0) rotateY(${mousePos.x * 0.2}deg)`
                  }}
                ></div>
                <div 
                  className="shape-3d-modern shape-secondary-modern"
                  style={{
                    transform: `translate3d(${mousePos.x * -0.05}px, ${mousePos.y * 0.08}px, 0) rotateX(${mousePos.y * 0.1}deg)`
                  }}
                ></div>
                <div 
                  className="shape-3d-modern shape-accent-modern"
                  style={{
                    transform: `translate3d(${mousePos.x * 0.08}px, ${mousePos.y * -0.05}px, 0) rotate(${mousePos.x * 0.1}deg)`
                  }}
                ></div>
                
                {/* Enhanced floating tech elements */}
                <div className="floating-element-modern element-1-modern">
                  <div className="tech-icon-modern">�</div>
                  <div className="tech-label">AI Powered</div>
                </div>
                <div className="floating-element-modern element-2-modern">
                  <div className="tech-icon-modern">⚡</div>
                  <div className="tech-label">Lightning Fast</div>
                </div>
                <div className="floating-element-modern element-3-modern">
                  <div className="tech-icon-modern">�️</div>
                  <div className="tech-label">Secure</div>
                </div>
                <div className="floating-element-modern element-4-modern">
                  <div className="tech-icon-modern">📊</div>
                  <div className="tech-label">Analytics</div>
                </div>
                
                {/* Enhanced dashboard mockup */}
                <div className="dashboard-mockup-modern">
                  <div className="dashboard-header-modern">
                    <div className="dashboard-controls-modern">
                      <span className="control-modern red"></span>
                      <span className="control-modern yellow"></span>
                      <span className="control-modern green"></span>
                    </div>
                    <div className="dashboard-title">{t('hero.dashboard.title')}</div>
                  </div>
                  <div className="dashboard-content-modern">
                    <div className="dashboard-stats-row">
                      <div className="stat-item">
                        <div className="stat-value">$2.4M</div>
                        <div className="stat-label">Revenue</div>
                        <div className="stat-trend up">↗ +23%</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">47K</div>
                        <div className="stat-label">Users</div>
                        <div className="stat-trend up">↗ +12%</div>
                      </div>
                    </div>
                    <div className="dashboard-chart-modern">
                      <div className="chart-bar-modern" style={{height: '60%', animationDelay: '0.1s'}}></div>
                      <div className="chart-bar-modern" style={{height: '80%', animationDelay: '0.2s'}}></div>
                      <div className="chart-bar-modern" style={{height: '45%', animationDelay: '0.3s'}}></div>
                      <div className="chart-bar-modern" style={{height: '90%', animationDelay: '0.4s'}}></div>
                      <div className="chart-bar-modern" style={{height: '70%', animationDelay: '0.5s'}}></div>
                      <div className="chart-bar-modern" style={{height: '85%', animationDelay: '0.6s'}}></div>
                    </div>
                    <div className="dashboard-metrics-modern">
                      <div className="metric-item-modern">
                        <div className="metric-dot-modern primary"></div>
                        <span>System Performance: 98.7%</span>
                      </div>
                      <div className="metric-item-modern">
                        <div className="metric-dot-modern secondary"></div>
                        <span>API Response: 124ms</span>
                      </div>
                      <div className="metric-item-modern">
                        <div className="metric-dot-modern success"></div>
                        <span>Active Sessions: 12,847</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced scroll indicator */}
      <div className="scroll-indicator-modern">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <div className="scroll-text-modern">{t('hero.scrollText')}</div>
        <div className="scroll-arrows">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
