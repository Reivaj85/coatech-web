import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../../design-system/atoms/Button';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified navigation structure with translations
  const navItems = [
    { key: 'home', path: '/', label: t('nav.home') },
    { key: 'about', path: '/about', label: t('nav.about') },
    { key: 'services', path: '/services', label: t('nav.services') },
    { key: 'portfolio', path: '/portfolio', label: t('nav.portfolio') },
    { key: 'contact', path: '/contact', label: t('nav.contact') }
  ];

  const handleNavClick = () => {
    setExpanded(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
    >
      <Container>
        {/* Left-aligned logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-modern">
          CoaTech
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggle-modern"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Minimal nav items */}
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.key}
                as={Link}
                to={item.path}
                className={`nav-link-modern ${isActive(item.path) ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Right side controls */}
          <Nav className="ms-auto align-items-center">
            {/* Language Selector */}
            <Dropdown className="me-3">
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="language-toggle-modern"
                id="language-dropdown"
              >
                {languages.find(lang => lang.code === currentLanguage)?.flag} {currentLanguage.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map((language) => (
                  <Dropdown.Item
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    active={currentLanguage === language.code}
                    className="language-item-modern"
                  >
                    {language.flag} {language.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Theme toggle */}
            <button
              className="theme-toggle-modern"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Persistent "Get Quote" button in accent color */}
            <Button
              variant="primary"
              size="md"
              as={Link}
              to="/contact"
              className="nav-cta-modern"
            >
              {t('nav.contact')}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
