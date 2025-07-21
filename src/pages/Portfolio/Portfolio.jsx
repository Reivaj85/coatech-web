import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'
import PortfolioPreview from '../../components/PortfolioPreview/PortfolioPreview'

const Portfolio = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('portfolio.title')} - CoaTech</title>
        <meta name="description" content={t('portfolio.subtitle')} />
      </Helmet>

      <div className="portfolio-page">
        <section className="section-padding" style={{ paddingTop: '120px' }}>
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
                  {t('portfolio.title')}
                </h1>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('portfolio.subtitle')}
                </p>
              </Col>
            </Row>
            <PortfolioPreview />
          </Container>
        </section>
      </div>
    </>
  )
}

export default Portfolio
