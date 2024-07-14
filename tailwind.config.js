/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },

      dropShadow: {

        'custom-red': '0 7px 2px rgba(255, 0, 0, 0.5)',
        'custom-blue': '0 4px 6px rgba(0, 0, 255, 0.5)',
        'custom-gray' : 'rgb(108, 103, 103)',
        
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },

      theme: {
        fontSize: {
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
        }
      },

      colors: {
        customColor: {
          fondo: '#5C0000',
          DEFAULT: '#c084fc',
          dark: '#9333ea',
          verde: '#208253',
          came: '#854747',
        },
        'regal-blue': '#243c5a',
      },

      spacing: {
        '128': '32rem',
      }

    },
  },
  plugins: [],
}