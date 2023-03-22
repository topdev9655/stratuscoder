/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '2xl': {'min': '1535px'},
        'xl': {'min': '1024px'},
        'lg': {'min': '768px'},
        'md': {'max': '768px'},
        'sm': {'max': '480px'},
      },
      colors: {
        'text': '#00151f',
        'active': '#3fc1ff',
        'active-30': 'rgba(63, 193, 255, .3)',
        'muted': '#7b858a',
        'border-nav': '#b4c6cf',
        'button': '#ffdb3d',
        'card-icon': '#3fc1ff',
        'card-divider': '#d2ebf7',
        'home-section-4': '#f0faff',
        'home-section-4-bottom': '#ffdb3d',
        'home-section-4-bottom-border': 'rgba(0, 28, 41, 0.5)',
        'footer': '#001c29',
        'services-section-2-card-hover': 'rgba(63, 193, 255, 0.15)',
        'services-section': '#9fe0ff',
        'progress': '#fff5ca',
        'warning': '#ffdb3d',
        'input': '#eef5f8',
        'backdrop': 'rgba(0, 27, 39, 0.5)'
      },
      backgroundImage: {
        'home-section-1': 'url("/images/home/bg-section1.png")',
        'home-section-2': 'url("/images/home/bg-section2.png")',
        'home-section-4': 'url("/images/home/bg-section4.png")',
        'home-section-5': 'url("/images/home/bg-section5.png")',
        'mobile-hero':'url(/images/home/mobile-hero.png)',
        'mobile-section-2':'url(/images/home/mobile-section2.png)',
        'card-1': 'linear-gradient(158.72deg, rgba(255, 255, 255, 0.7) 51.86%, rgba(255, 255, 255, 0) 103.3%)',
        'card-hover': 'linear-gradient(158.72deg, rgba(63, 193, 255, 0.6) 17.13%, rgba(63, 193, 255, 0) 103.3%)',
        'card-2': 'linear-gradient(158.72deg, rgba(255, 255, 255, 0.6) 23.34%, rgba(255, 255, 255, 0) 103.3%)',
        'services-section-1': 'url("/images/services/bg-section1.png")',
        'services-section-3': 'url("/images/services/bg-section3.png")',
        'services-section-4': 'url("/images/services/bg-section4.png")',
        'arrow-up': 'url("/images/arrow-up.png")',
        'arrow-down': 'url("/images/arrow-down.png")',
        'about-us-section-1': 'url("/images/aboutUs/bg-section1.png")',
        'about-us-section-3': 'url("/images/aboutUs/bg-section3.png")',
        'about-us-section-4': 'url("/images/aboutUs/bg-section4.png")',
        'about-us-card': 'linear-gradient(158.72deg, rgba(255, 255, 255, 0.4) 23.34%, rgba(255, 255, 255, 0) 103.3%)',
        'about-us-card-hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(158.72deg, rgba(255, 255, 255, 0.4) 23.34%, rgba(255, 255, 255, 0) 103.3%)',
        'careers-section-1': 'url("/images/careers/bg-section1.png")',
        'careers-section-3': 'url("/images/careers/bg-section3.png")',
        'careers-card': 'linear-gradient(158.72deg, rgba(255, 255, 255, 0.8) 51.86%, rgba(255, 255, 255, 0) 103.3%)',
        'careers-section-4': 'url("/images/careers/bg-section4.png")',
        'contact-section-1': 'url("/images/contact/bg-section1.png")',
        'contact-section-2': 'url("/images/contact/bg-section2.png")'
      },
      boxShadow: {
        'button': '0px 7px 32px rgba(255, 219, 61, 0.5)',
        'home-section-3-card': '0px 12px 30px 17px rgba(195, 209, 217, 0.5)',
        'contact-icon': '0px 12px 30px 17px rgba(63, 193, 255, 0.2)'
      },
      dropShadow: {
        'services-section-2-button': 'drop-shadow(0px 7px 32px rgba(255, 219, 61, 0.5))',
      },
      transitionProperty: {
        'height': 'height'
      },
      transitionTimingFunction: {
        'ease': 'ease'
      },
      backgroundSize: {
        'full': '100% 100%'
      },
      flexBasis: {
        'overlap-1/3': 'calc(33.333333% + 2.75rem)'
      },
      height: {
        '500': '500px'
      }
    },
    fontFamily: {
      'nav': ['Roboto', 'sans-serif'],
    },
    minWidth: {
      '16': '4rem'
    },

  },
  plugins: [],
  
}
