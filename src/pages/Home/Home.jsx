import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'
import PortfolioPreview from '../../components/PortfolioPreview/PortfolioPreview'
import BlogPreview from '../../components/BlogPreview/BlogPreview'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} - CoaTech</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta name="keywords" content="technology, web development, digital solutions, innovation, coatech" />
      </Helmet>

      <div className="home-page">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Preview */}
        <section className="section-padding bg-light">
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                  {t('services.title')}
                </h2>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('services.subtitle')}
                </p>
              </Col>
            </Row>
            <ServicesPreview />
            <Row className="text-center mt-5">
              <Col>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="primary" 
                  size="lg"
                  className="btn-custom"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t('common.viewAll')}
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Portfolio Preview */}
        <section className="section-padding">
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                  {t('portfolio.title')}
                </h2>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('portfolio.subtitle')}
                </p>
              </Col>
            </Row>
            <PortfolioPreview />
            <Row className="text-center mt-5">
              <Col>
                <Button 
                  as={Link} 
                  to="/portfolio" 
                  variant="outline-primary" 
                  size="lg"
                  className="btn-custom"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t('common.viewAll')}
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Blog Preview */}
        <section className="section-padding bg-light">
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                  {t('blog.title')}
                </h2>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('blog.subtitle')}
                </p>
              </Col>
            </Row>
            <BlogPreview />
            <Row className="text-center mt-5">
              <Col>
                <Button 
                  as={Link} 
                  to="/blog" 
                  variant="primary" 
                  size="lg"
                  className="btn-custom"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t('common.viewAll')}
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="cta-section section-padding">
          <Container>
            <Row className="text-center">
              <Col lg={8} className="mx-auto">
                <h2 className="display-5 fw-bold text-white mb-4" data-aos="fade-up">
                  Ready to Start Your Project?
                </h2>
                <p className="lead text-white-50 mb-4" data-aos="fade-up" data-aos-delay="100">
                  Let&apos;s work together to bring your ideas to life with cutting-edge technology solutions.
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="light" 
                    size="lg"
                    className="btn-custom"
                  >
                    {t('nav.contact')}
                  </Button>
                  <Button 
                    as={Link} 
                    to="/portfolio" 
                    variant="outline-light" 
                    size="lg"
                    className="btn-custom"
                  >
                    {t('portfolio.title')}
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Home
