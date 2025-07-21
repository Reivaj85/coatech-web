import { useState } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../hooks/useLanguage'
import { 
  Card,
  CardBody,
  CardHeader,
  Heading1,
  Heading3,
  BodyText,
  InputGroup,
  TextareaGroup,
  PrimaryButton,
  Icon
} from '../../design-system'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState({ show: false, type: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setShowAlert({
        show: true,
        type: 'success',
        message: t('contact.form.success')
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setShowAlert({
        show: true,
        type: 'danger',
        message: t('contact.form.error')
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setShowAlert({ show: false, type: '', message: '' })
      }, 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Icon name="geo-alt" size="xl" color="#40E0D0" />,
      title: 'Address',
      content: t('contact.info.address')
    },
    {
      icon: <Icon name="telephone" size="xl" color="#40E0D0" />,
      title: 'Phone', 
      content: t('contact.info.phone')
    },
    {
      icon: <Icon name="envelope" size="xl" color="#40E0D0" />,
      title: 'Email',
      content: t('contact.info.email')
    },
    {
      icon: <Icon name="clock" size="xl" color="#40E0D0" />,
      title: 'Hours',
      content: t('contact.info.hours')
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - CoaTech</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      <div className="contact-page">
        <section className="contact-hero section-padding">
          <Container>
            <Row className="text-center">
              <Col>
                <Heading1 
                  weight="bold" 
                  className="mb-3" 
                  data-aos="fade-up"
                >
                  {t('contact.title')}
                </Heading1>
                <BodyText 
                  size="large" 
                  color="secondary" 
                  data-aos="fade-up" 
                  data-aos-delay="100"
                >
                  {t('contact.subtitle')}
                </BodyText>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="contact-content section-padding">
          <Container>
            <Row>
              {/* Contact Form */}
              <Col lg={8} className="mb-5">
                <Card 
                  variant="borderless" 
                  elevation="large" 
                  className="contact-form-card" 
                  data-aos="fade-right"
                >
                  <CardHeader>
                    <Heading3>Send us a Message</Heading3>
                  </CardHeader>
                  
                  <CardBody>
                    {showAlert.show && (
                      <Alert 
                        variant={showAlert.type} 
                        dismissible 
                        onClose={() => setShowAlert({ show: false, type: '', message: '' })}
                        className="mb-4"
                      >
                        {showAlert.message}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <InputGroup
                            label={t('contact.form.name')}
                            required
                            inputProps={{
                              type: 'text',
                              name: 'name',
                              value: formData.name,
                              onChange: handleInputChange,
                              placeholder: t('contact.form.name')
                            }}
                          />
                        </Col>
                        <Col md={6}>
                          <InputGroup
                            label={t('contact.form.email')}
                            required
                            inputProps={{
                              type: 'email',
                              name: 'email',
                              value: formData.email,
                              onChange: handleInputChange,
                              placeholder: t('contact.form.email')
                            }}
                          />
                        </Col>
                      </Row>
                      
                      <InputGroup
                        label={t('contact.form.subject')}
                        required
                        inputProps={{
                          type: 'text',
                          name: 'subject',
                          value: formData.subject,
                          onChange: handleInputChange,
                          placeholder: t('contact.form.subject')
                        }}
                      />
                      
                      <TextareaGroup
                        label={t('contact.form.message')}
                        required
                        textareaProps={{
                          rows: 5,
                          name: 'message',
                          value: formData.message,
                          onChange: handleInputChange,
                          placeholder: t('contact.form.message')
                        }}
                      />
                      
                      <PrimaryButton
                        type="submit"
                        size="large"
                        disabled={isSubmitting}
                        className="w-100"
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="arrow-clockwise" className="ds-icon--spinning me-2" />
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            {t('contact.form.send')}
                            <Icon name="send" size="small" />
                          </>
                        )}
                      </PrimaryButton>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              {/* Contact Information */}
              <Col lg={4}>
                <div className="contact-info-section" data-aos="fade-left" data-aos-delay="200">
                  <Heading3 className="mb-4">Get in Touch</Heading3>
                  
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index} 
                      variant="borderless" 
                      elevation="small" 
                      className="mb-3 contact-info-card"
                    >
                      <CardBody>
                        <div className="d-flex align-items-center">
                          <div className="contact-icon me-3">
                            {info.icon}
                          </div>
                          <div>
                            <BodyText weight="semibold" className="mb-1">
                              {info.title}
                            </BodyText>
                            <BodyText color="secondary" className="mb-0">
                              {info.content}
                            </BodyText>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}

                  {/* Social Media */}
                  <Card 
                    variant="borderless" 
                    elevation="small" 
                    className="mt-4 social-card"
                  >
                    <CardBody className="text-center">
                      <BodyText weight="semibold" className="mb-3">
                        Follow Us
                      </BodyText>
                      <div className="social-icons d-flex justify-content-center gap-3">
                        <Icon name="facebook" size="xl" className="ds-icon--clickable" color="#1877f2" />
                        <Icon name="twitter" size="xl" className="ds-icon--clickable" color="#1da1f2" />
                        <Icon name="linkedin" size="xl" className="ds-icon--clickable" color="#0077b5" />
                        <Icon name="instagram" size="xl" className="ds-icon--clickable" color="#e4405f" />
                        <Icon name="github" size="xl" className="ds-icon--clickable" color="#333" />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-placeholder" data-aos="fade-up">
            <div className="map-content text-center">
              <BodyText weight="semibold" size="large" className="mb-2">
                <Icon name="geo-alt" className="me-2" />
                Find Us Here
              </BodyText>
              <BodyText color="secondary" className="mb-3">
                123 Tech Street, Innovation City
              </BodyText>
              <PrimaryButton variant="outline">
                Open in Maps
                <Icon name="box-arrow-up-right" size="small" />
              </PrimaryButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
