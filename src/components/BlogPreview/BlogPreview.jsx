import { Row, Col, Card, Button } from 'react-bootstrap'
import { useLanguage } from '../../hooks/useLanguage'
import './BlogPreview.css'

const BlogPreview = () => {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      image: 'https://via.placeholder.com/400x200/007bff/ffffff?text=Web+Dev+2025',
      author: 'John Doe',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Web Development'
    },
    {
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn how to structure and optimize React applications for better performance and maintainability.',
      image: 'https://via.placeholder.com/400x200/28a745/ffffff?text=React+Best+Practices',
      author: 'Jane Smith',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'React'
    },
    {
      title: 'The Rise of AI in Software Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we write, test, and deploy code.',
      image: 'https://via.placeholder.com/400x200/ffc107/000000?text=AI+Development',
      author: 'Mike Johnson',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'AI'
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <Row className="blog-preview">
      {blogPosts.map((post, index) => (
        <Col lg={4} md={6} className="mb-4" key={index}>
          <Card 
            className="blog-card h-100 border-0 shadow-sm"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="blog-image-container">
              <Card.Img 
                variant="top" 
                src={post.image} 
                alt={post.title}
                className="blog-image"
              />
              <div className="blog-category-badge">
                {post.category}
              </div>
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="h5 mb-3 blog-title">
                {post.title}
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1 blog-excerpt">
                {post.excerpt}
              </Card.Text>
              <div className="blog-meta mb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="blog-author">
                    <small className="text-muted">By {post.author}</small>
                  </div>
                  <div className="blog-read-time">
                    <small className="text-muted">{post.readTime}</small>
                  </div>
                </div>
                <div className="blog-date mt-1">
                  <small className="text-muted">
                    {t('blog.publishedOn')} {formatDate(post.date)}
                  </small>
                </div>
              </div>
              <Button 
                variant="outline-primary" 
                size="sm"
                className="btn-custom mt-auto"
              >
                {t('blog.readMore')}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default BlogPreview
