import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';
import { purple, green, red } from '@material-ui/core/colors';

let theme = createMuiTheme({
   palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[600],
    },
    warning: {
      main: red[600]
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        "*": {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box'
        },
        html: {
          height: '100%'
        },
        body: {
            height: '100%'
        },
        "#root": {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(360deg, #6a0080ab, #800080d1)'
        },
        '*::-webkit-scrollbar': {
            width: '5px'
        },
       '*::-webkit-scrollbar-thumb': {
           backgroundColor: '#6a0080ab',
        }
      },
    },
  },
});

theme = responsiveFontSizes(theme);


export default theme;