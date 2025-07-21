import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'

const About = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - CoaTech</title>
        <meta name="description" content={t('about.subtitle')} />
      </Helmet>

      <div className="about-page">
        <section className="section-padding" style={{ paddingTop: '120px' }}>
          <Container>
            <Row className="text-center">
              <Col>
                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
                  {t('about.title')}
                </h1>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('about.subtitle')}
                </p>
                <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
                  {t('about.description')}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default About
