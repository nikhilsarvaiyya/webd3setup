import {  createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
    },
  });

export {theme}