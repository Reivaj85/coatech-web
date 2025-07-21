// Design Tokens - Central source of truth for styling values
// CoaTech Design System Tokens
// Updated with UX/UI guidelines for corporate web portal

export const designTokens = {
  // Enhanced Color Palette - Modern SaaS Teal & Charcoal
  colors: {
    // Primary vibrant teal accent
    primary: '#14b8a6',      // Vibrant teal
    primaryDark: '#0f766e',  // Darker teal
    primaryLight: '#2dd4bf', // Lighter teal
    secondary: '#06b6d4',    // Cyan accent
    secondaryDark: '#0891b2',
    secondaryLight: '#22d3ee',
    
    // Brand gradients - teal with smooth transitions
    gradientPrimary: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
    gradientLight: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
    gradientHero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    
    // Deep charcoal and slate backgrounds
    neutral: {
      50: '#f8fafc',   // Off-white for text areas
      100: '#f1f5f9',  // Light slate
      200: '#e2e8f0',  // Light gray
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',  // Medium slate
      600: '#475569',
      700: '#334155',  // Dark slate
      800: '#1e293b',  // Deep slate background
      900: '#0f172a'   // Deep charcoal background
    },
    
    // Modern text colors for SaaS appeal
    text: {
      primary: '#0f172a',      // Deep charcoal for main content
      secondary: '#475569',    // Slate for supporting text
      muted: '#64748b',        // Medium slate for captions
      white: '#ffffff',
      onPrimary: '#ffffff',    // Text on primary backgrounds
      onDark: '#f8fafc'        // Text on dark backgrounds
    },
    
    // Semantic colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Interactive states with teal accents
    hover: 'rgba(20, 184, 166, 0.1)',
    focus: 'rgba(20, 184, 166, 0.2)',
    active: 'rgba(20, 184, 166, 0.3)',
    
    // Surface colors for modern SaaS design
    background: '#ffffff',
    backgroundDark: '#0f172a',  // Deep charcoal background
    surface: '#f8fafc',
    surfaceDark: '#1e293b',     // Dark slate surface
    overlay: 'rgba(15, 23, 42, 0.7)',  // Dark overlay
    cardBackground: 'rgba(255, 255, 255, 0.9)',
    cardBackgroundDark: 'rgba(30, 41, 59, 0.9)'
  },

  // Modern SaaS Typography - Clean geometric sans-serif
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      display: '"Space Grotesk", "Inter", sans-serif', // For headlines
      mono: '"JetBrains Mono", "Fira Code", monospace'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px (base requirement)
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px - Hero headlines
      '6xl': '3.75rem',  // 60px - Large displays
      '7xl': '4.5rem',   // 72px - Oversized headlines
      '8xl': '6rem'      // 96px - Extra large displays
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Consistent 8-point grid spacing system
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px (8-point grid base)
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px (8-point grid)
    xl: '1.5rem',     // 24px (8-point grid)
    '2xl': '2rem',    // 32px (8-point grid)
    '3xl': '2.5rem',  // 40px (8-point grid)
    '4xl': '3rem',    // 48px (8-point grid)
    '5xl': '4rem',    // 64px (8-point grid)
    '6xl': '5rem',    // 80px (8-point grid)
    '7xl': '6rem',    // 96px (8-point grid)
    '8xl': '8rem',    // 128px (8-point grid)
    '9xl': '10rem'    // 160px (8-point grid)
  },

  // Elevated shadows for floating cards and modern depth
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.35)', // Floating cards
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    brand: '0 10px 25px rgba(20, 184, 166, 0.3)',    // Teal brand shadow
    glow: '0 0 20px rgba(20, 184, 166, 0.4)'         // Teal glow effect
  },

  // Border radius for modern design
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  },

  // Smooth micro-interactions and animations
  transitions: {
    fast: 'all 0.15s ease-out',
    normal: 'all 0.3s ease-out',
    slow: 'all 0.5s ease-out',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    scale: 'transform 0.2s ease-out',
    fadeIn: 'opacity 0.3s ease-in-out',
    slideUp: 'transform 0.4s ease-out, opacity 0.4s ease-out'
  },

  // Animation presets for micro-interactions
  animations: {
    cardHover: 'transform: translateY(-4px); box-shadow: var(--shadow-3xl);',
    buttonPress: 'transform: scale(0.98);',
    fadeInUp: 'transform: translateY(20px) opacity(0); animation: fadeInUp 0.6s ease-out forwards;',
    parallax: 'transform: translateY(var(--parallax-offset, 0));'
  },

  // Professional breakpoints for responsive design (down to 320px)
  breakpoints: {
    xs: '320px',   // Extra small devices
    sm: '640px',   // Small devices
    md: '768px',   // Medium devices
    lg: '1024px',  // Large devices
    xl: '1280px',  // Extra large devices
    '2xl': '1536px' // 2X Large devices
  },

  // Z-index scale for layering
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
    maximum: 9999
  }
}
