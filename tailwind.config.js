module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1.4rem', //1.4rem, 2rem
      }
    },
    extend: {
      fontFamily: {
        'title': "'Inter', sans-serif",
        'sans': "'Open Sans', sans-serif",
      },
      colors: {
        primary: {
          50: '#e7f0fc',
          100: '#CFE1F9',
          200: '#9EC3F4',
          300: '#6EA5EE',
          400: '#3D87E9',
          500: '#0D69E3',
          600: '#0A54B6',
          700: '#083F88',
          800: '#052A5B',
          900: '#03152D',
        },
        /*
        accent: {
          50: '#e9f5fe',
          100: '#d3eafd',
          200: '#a6d5fa',
          300: '#7ac0f8',
          400: '#4dabf5', 
          500: '#2196f3',
          600: '#1a78c2',
          700: '#145a92',
          800: '#0d3c61',
          900: '#071e31',
        }, 
        */

        /*
        emphasis: {
          50: '#e6f7ec',
          100: '#CCEFDA',
          200: '#99DEB5',
          300: '#66CE8F',
          400: '#33BD6A',
          500: '#00AD45',
          600: '#008A37',
          700: '#006829',
          800: '#00451C',
          900: '#00230E',
        },*/

        /* Prueba Azul
        accent: {
          50: '#eff7fe',
          100: '#deeefe',
          200: '#beddfd',
          300: '#9dcdfb',
          400: '#7dbcfa', 
          500: '#5cabf9',
          600: '#4a89c7',
          700: '#376795',
          800: '#254464',
          900: '#122232',
        }, */


        /* C O M P L E M E N T A R I O */
        
        
        accent: {
          50: '#f7f1e6',
          100: '#efe3cc',
          200: '#dec699',
          300: '#ceaa66',
          400: '#bd8d33', 
          500: '#ad7100',
          600: '#8a5a00',
          700: '#684400',
          800: '#452d00',
          900: '#231700',
        }
        


        /* G R I S */
        /*
        accent: {
          50: '#f6f6f6',
          100: '#ededed',
          200: '#dcdcdc',
          300: '#cacaca',
          400: '#b9b9b9', 
          500: '#a7a7a7',
          600: '#868686',
          700: '#646464',
          800: '#434343',
          900: '#212121',
        }
        */



      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 8))' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
