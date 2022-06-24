import { createTheme } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

//TODO: не рабоает расширение темы лабораторными компонентами
const theme = createTheme({
  palette: {
    primary: {
      main: '#00AABE',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: 'white',
          borderBottom: '1px solid currentColor',
          borderRadius: 0,
          padding: '13px 20px',
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '0.1em',
          // maxHeight: '55px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.7)',
          padding: 0,
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },
          },
        },
        adornedEnd: {
          color: 'currentColor',
        },
        input: {
          padding: '10px',
          color: 'rgba(255, 255, 255, 0.7)',
        },
        // inputMultiline: {
        //   // padding: '10px',
        // },
        notchedOutline: {
          // borderColor: '#4F4F4F',
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#4F4F4F',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'currentColor',
        },
      },
    },

    // @ts-ignore
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          border: 'none',
          boxShadow: 'none',
          color: 'white',
          '&.Mui-disabled': {
            backgroundColor: 'rgba(80,80,82,0.87)',
            color: 'white!important',
          },
        },
      },
      defaultProps: {
        variant: 'text',
      },
    },
  },
});
export default theme;
