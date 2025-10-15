/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // rich-blue
        input: 'var(--color-input)', // elevated-surface
        ring: 'var(--color-ring)', // electric-cyan
        background: 'var(--color-background)', // near-black
        foreground: 'var(--color-foreground)', // white
        primary: {
          DEFAULT: 'var(--color-primary)', // electric-cyan
          foreground: 'var(--color-primary-foreground)' // near-black
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // deep-navy
          foreground: 'var(--color-secondary-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // vibrant-red
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // deep-navy
          foreground: 'var(--color-muted-foreground)' // cool-gray
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // rich-blue
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // elevated-surface
          foreground: 'var(--color-popover-foreground)' // white
        },
        card: {
          DEFAULT: 'var(--color-card)', // elevated-surface
          foreground: 'var(--color-card-foreground)' // white
        },
        success: {
          DEFAULT: 'var(--color-success)', // bright-green
          foreground: 'var(--color-success-foreground)' // near-black
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber
          foreground: 'var(--color-warning-foreground)' // near-black
        },
        error: {
          DEFAULT: 'var(--color-error)', // vibrant-red
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'cyber': '8px'
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(15, 52, 96, 0.3)',
        'glow-intense': '0 0 30px rgba(0, 255, 255, 0.5)',
        'glow-soft': '0 0 10px rgba(0, 255, 255, 0.2)'
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'cyber-flicker': 'cyber-flicker 0.15s ease-in-out'
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'cyber-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        'cyber': '12px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // rich-blue
        input: 'var(--color-input)', // elevated-surface
        ring: 'var(--color-ring)', // electric-cyan
        background: 'var(--color-background)', // near-black
        foreground: 'var(--color-foreground)', // white
        primary: {
          DEFAULT: 'var(--color-primary)', // electric-cyan
          foreground: 'var(--color-primary-foreground)' // near-black
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // deep-navy
          foreground: 'var(--color-secondary-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // vibrant-red
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // deep-navy
          foreground: 'var(--color-muted-foreground)' // cool-gray
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // rich-blue
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // elevated-surface
          foreground: 'var(--color-popover-foreground)' // white
        },
        card: {
          DEFAULT: 'var(--color-card)', // elevated-surface
          foreground: 'var(--color-card-foreground)' // white
        },
        success: {
          DEFAULT: 'var(--color-success)', // bright-green
          foreground: 'var(--color-success-foreground)' // near-black
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber
          foreground: 'var(--color-warning-foreground)' // near-black
        },
        error: {
          DEFAULT: 'var(--color-error)', // vibrant-red
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'cyber': '8px'
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(15, 52, 96, 0.3)',
        'glow-intense': '0 0 30px rgba(0, 255, 255, 0.5)',
        'glow-soft': '0 0 10px rgba(0, 255, 255, 0.2)'
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'cyber-flicker': 'cyber-flicker 0.15s ease-in-out'
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'cyber-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        'cyber': '12px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}
