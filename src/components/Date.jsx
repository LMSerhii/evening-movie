import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';

export default function Date({ convertedDate }) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#4a148c',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        p={1.5}
        sx={{
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        {convertedDate}
      </Box>
    </ThemeProvider>
  );
}
