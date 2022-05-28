

const colors = require('tailwindcss/colors');

module.exports = {

  content: ['./src/**/*.{html,js}'],

  theme: {
    screens: {
      sm: '800px',
      xl: '1280px'
    },
    colors: {
      'primary-color': '#1b3d87',
      'secondary-color': '#333',
      'grey-soft':'#6c757d',
      'aqua-color':'#00ffff',
      'blue-dark':'#041f5a',
      'blue':'#00f',
      'grey-dark':'#283747',
      'white':colors.white,
      'burlywood':'#deb887',
      'chocolate':'#d2691e',
      'azure-color': {

        //color por defecto de azure
        DEFAULT:'#f0ffff',
        //azure con 70 por ciento de brillante
        //utilizamos la definición de color hsl para describir la función **color.scale** de scss
        //para especificar 0.7 de brillantez
        700:'#f1ffff'

      }
    },
    fontFamily: {
      sans: [
        '-apple-system', 
        'BlinkMacSystemFont', "Segoe UI", "Roboto",
        'Helvetica Neue', 'Arial2', 'sans-serif', 'Apple Color Emoji', 
        'Segoe UI Emoji', 'Segoe UI Symbol'
      ],
      serif: ["Georgia", "Times New Roman", 'serif'],
    },
  
    extend: {
      fontSize: {
        '2rem': '2rem',
        '4vh': '4vh',
        '2vh':'2vh',
      },
  
      height: {
        '10vh': '10vh',
        '60vh': '60vh'
      },
      margin: {
        'vh5':'5vh',
        '2vw':'2vw',
        'n2vw':'-2vw'
      },
      padding: {
        '2vh':'2vh',
        '1vh':'1vh'
      },
      
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      
      flexBasis: {
        '13/50':'26%'
      },
      backgroundImage: {
        'foto-pattern': "url('../images/foto.jpg')",
      }


    }
  },

  plugins: [],
}
