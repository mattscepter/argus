module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('argus website/PNG/Insta Argus12.png')",
<<<<<<< HEAD
        'footer': "url('argus website/PNG/Footerbg.png')",
=======
        'footer': "url('argus website/SVG/1. LOGO Vectorssmall 2.svg')",
>>>>>>> 84cd7b6c6b1b6d1d1b033483021e33dde00429b8
        'mapbg': "url('argus website/PNG/World Map.png')",
        'mapbg2': "url('argus website/PNG/World Map Home.png')",
        'aboutbg':"url('argus website/PNG/Image Thumbnail2.png')",
        'servicesbg':"url('argus website/PNG/Image Thumbnail.png')",
        'jobsbg':"url('argus website/PNG/Image Thumbnail1.png')",
        'callus':"url('argus website/PNG/aboutcallusbg.png')",
        'knowbg':"url('argus website/PNG/Group 1560.jpg')",
        'empofmon':"url('argus website/PNG/Overlay.png')",
<<<<<<< HEAD
        'shape':"url(argus website/SVG/5. Newsletter-svg.svg)",
        'shape1':"url(argus website/SVG/Path 217.svg)",
        'siren':"url(argus website/SVG/siren.svg)",
        'logincar': "url(argus website/PNG/2. Hero box.png)" 
=======
        'shape':"url(argus website/SVG/5. Newsletter.svg)",
        'shape1':"url(argus website/SVG/Path 217.svg)",
        'siren':"url(argus website/SVG/siren.svg)",
        'header-bg':"url('argus website/PNG/1. Overlay 2.png')",
        'cta-bg':"url('argus website/PNG/1. Overlay 3.png')",
        'logincar': "url(argus website/PNG/2. Hero box.png)",
        'handcuffs': "url(argus website/SVG/9. Hancuffs.svg)" 
>>>>>>> 84cd7b6c6b1b6d1d1b033483021e33dde00429b8
       }),
       colors: {
        'gray-1': '#F1F1F1',
        'gray-2': '#868696',
        'gray-3': '#3F3F3F',
        'red-1': '#BA0913',
<<<<<<< HEAD
=======
        'black-1': '#1c1c1c',
        'hover': "#501616",
        'client':'#e8eaee'
>>>>>>> 84cd7b6c6b1b6d1d1b033483021e33dde00429b8
      },
      fontFamily: {
        'for-heading': ['Rajdhani','ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'for-para': ["Helvetica", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Arial', "Noto Sans","sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontSize: {
        '4xl': '2.85rem',
<<<<<<< HEAD
       }
=======
       },
       maxWidth: {
        '1366': '1366px',
        '1500': '1500px'
       },
       minWidth: {
        '650': '650px',
       },
       boxShadow: {
        "header-outer-shadow": '3px 3px 6px 1px rgba(0, 0, 0, 0.2)',
        "button-shadow": '3px 3px 6px 1px rgba(0, 0, 0, 0.4)',
        "button-shadow-2": '3px 3px 6px 1px rgba(0, 0, 0, 0.16)',
        "button-shadow-3": '3px 3px 6px 1px rgba(0, 0, 0, 0.08)',
        "button-inner": 'inset -3px -3px 6px 1px rgba(0, 0, 0, 0.20)'
      },
      backgroundSize: {
        'stretch-x': '100% 100%',
      }
>>>>>>> 84cd7b6c6b1b6d1d1b033483021e33dde00429b8
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
