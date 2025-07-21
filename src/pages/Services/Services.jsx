import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'

const Services = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('services.title')} - CoaTech</title>
        <meta name="description" content={t('services.subtitle')} />
      </Helmet>

      <div className="services-page">
        <section className="section-padding" style={{ paddingTop: '120px' }}>
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
                  {t('services.title')}
                </h1>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('services.subtitle')}
                </p>
              </Col>
            </Row>
            <ServicesPreview />
          </Container>
        </section>
      </div>
    </>
  )
}

export default Services
