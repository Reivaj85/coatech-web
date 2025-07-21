import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'
import BlogPreview from '../../components/BlogPreview/BlogPreview'

const Blog = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('blog.title')} - CoaTech</title>
        <meta name="description" content={t('blog.subtitle')} />
      </Helmet>

      <div className="blog-page">
        <section className="section-padding" style={{ paddingTop: '120px' }}>
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
                  {t('blog.title')}
                </h1>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                  {t('blog.subtitle')}
                </p>
              </Col>
            </Row>
            <BlogPreview />
          </Container>
        </section>
      </div>
    </>
  )
}

export default Blog
