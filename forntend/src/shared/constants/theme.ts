import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000536',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#0D144E',
    },
    success: {
      main: '#6aeb86',
      contrastText: '#000536',
    },
    warning: {
      main: '#ebbf6a',
      contrastText: '#000536',
    },
    info: {
      main: '#9fc0e7',
    },
    error: {
      main: '#fd0000',
    },
    text: {
      primary: '#9DA3DC',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          display: 'flex',
          gap: '0.5rem',
          lineHeight: '1.5rem',
          fontFamily: 'DM Mono, monospace',
          ':hover': {
            background: '#1f2655',
          },
          '&.Mui-disabled': {
            color: '#656885',
            background: '#000536',
            svg: {
              path: {
                stroke: '#656885',
              },
            },
          },
          '&.MuiButton-colorSecondary': {
            color: '#000536',
            background: '#ffffff',
            ':hover': {
              background: '#FFFFFFB3',
            },
            '&.Mui-disabled': {
              background: '#FFFFFFB3',
            },
          },
        },
        endIcon: {
          margin: 0,
        },
        startIcon: {
          margin: 0,
        },
        sizeMedium: {
          fontSize: '1rem',
          padding: '1rem',
          borderRadius: '40px',
        },
        outlined: {
          color: '#9DA3DC',
          borderColor: '#9DA3DC',
          ':hover': {
            borderColor: '#9DA3DC',
          },
        },
        sizeSmall: {
          fontSize: '18px',
          lineHeight: '24px',
          padding: '0.5rem 1rem',
          borderRadius: '40px',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          background: '#000536',
          ':hover': {
            background: '#1f2655',
          },
        },
        colorSecondary: {
          background: '#ffffff',
          ':hover': {
            background: '#262b58',
          },
        },
        sizeMedium: {
          padding: '1rem',
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          background: '#000536',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },

    // SELECT OPTIONS

    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#9DA3DC',
          border: '1px solid #9DA3DC',
          borderRadius: '20px',
          textTransform: 'uppercase',
          fontSize: '14px',
          lineHeight: '18px',
          '& :focus': {
            background: 'rgba(255,255,255,0.2)',
          },
        },
        icon: {
          right: '1rem',
          top: 'auto',
        },
        filled: {
          background: '#000536',
        },
        select: {
          borderRadius: '20px',
          padding: '7px 18px',
          minHeight: 'auto',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          marginBottom: '4px',
          color: '#9DA3DC',
          textTransform: 'uppercase',
          fontSize: '14px',
          lineHeight: '18px',
          '&.Mui-selected': {
            background: '#9DA3DC4D',
            border: '1px solid #9DA3DC',
            color: 'white',
            ':hover': {
              background: '#9DA3DC4D',
              color: 'white',
            },
            ':focus': {
              background: '#9DA3DC4D',
            },
          },
          ':hover': {
            background: '#9DA3DC4D',
            color: 'white',
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          padding: '1rem',
          background: '#0D144E',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { margin: '1rem 0', borderRadius: '1rem', backgroundColor: 'transparent' },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: {
          marginBottom: '12px',
          paddingLeft: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'transparent',
          color: 'white',
          textTransform: 'uppercase',
          borderBottom: '1px solid #9DA3DC4D',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        sizeMedium: {
          height: 'auto',
          padding: '8px 20px',
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: '10px',
          fontFamily: 'DM Mono, monospace',
          fontSize: '24px',
          fontWeight: 500,
          borderRadius: '30px',
        },
        sizeSmall: {
          height: 'auto',
          padding: '0 14px',
          display: 'flex',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 700,
          border: '1px solid #9DA3DC',
          borderRadius: '40px',
        },
        label: {
          padding: 0,
        },
        icon: {
          margin: 0,
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: '1rem',
          margin: 0,
          background: '#000536',
          borderRadius: '20px',
          ':last-of-type': {
            borderRadius: '20px',
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          '&.Mui-expanded': {
            minHeight: 'auto',
            marginBottom: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid #9DA3DC4D',
          },
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            minHeight: 'auto',
            margin: 0,
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        determinate: {
          color: 'white',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          textTransform: 'uppercase',
          fontSize: '14px',
          lineHeight: '18px',
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: '#fd0000',
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          height: '2px',
          opacity: 1,
          padding: 0,
          '& .MuiSlider-thumb': {
            // transition: 'left .5s',
            '::before': {
              boxShadow: 'none',
            },
            // ':active': {
            //   transition: 'left 0',
            // },
          },
          '& .MuiSlider-track': {
            color: 'transparent',
          },
        },
        rail: {
          opacity: 0,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          padding: 0,
          '&:-webkit-autofill': {
            borderRadius: 0,
          },
        },
        root: {
          padding: '1rem',
          background: 'grey',
          color: 'white',
          fontSize: '20px',
          lineHeight: '28px',
          borderRadius: '40px',
          border: '1px solid #FFFFFF59',
          '::before': {
            content: `''`,
            border: 'none',
          },
          '::after': {
            content: `''`,
            border: 'none',
          },
          ':hover': {
            ':not(.Mui-disabled, .Mui-error):before': {
              border: 'none',
            },
            background: 'green',
            border: '1px solid #FFFFFF59 !important',
          },
          // ':focus': {
          //   background: 'yellow',
          //   border: '1px solid #FFFFFF59',
          // },
          '&.Mui-focused': {
            background: 'darkgrey',
          },
          '&.Mui-disabled: before': {
            borderBottomStyle: 'none',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          paddingLeft: '48px',
        },
        flexContainer: {
          gap: '42px',
        },
        indicator: {
          backgroundColor: 'white',
          transition: 'none',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: '#9DA3DC',
          lineHeight: '20px',
          padding: '32px 0',
          '&.Mui-selected': {
            color: 'white',
          },
          '&.Mui-disabled': {
            color: 'grey',
          },
        },
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: '10px',
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          background: 'transparent',
          color: '#9DA3DC',
          '&.Mui-selected': {
            background: 'transparent',
            color: 'white',
          },
        },
      },
    },
  },
});
