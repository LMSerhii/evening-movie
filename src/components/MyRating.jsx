import { ThemeProvider } from '@emotion/react';
import { Rating, createTheme } from '@mui/material';

export default function MyRating({ value }) {
  const customTheme = createTheme({
    components: {
      MuiRating: {
        styleOverrides: {
          iconEmpty: {
            color: 'grey', // Змінюємо колір неактивних зірок на сірий
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Rating name="read-only" value={value / 2} precision={0.5} readOnly />
    </ThemeProvider>
  );
}
