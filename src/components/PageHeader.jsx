import { Box, Typography } from '@mui/material';

export default function PageHeader({ children }) {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      alignItems="center"
      justifyContent={'center'}
      border={'1px solid #182128'}
      bgcolor={'#11161C'}
      my={5}
      p={3}
    >
      <Typography variant="h2" component={'h1'}>
        {children}
      </Typography>
    </Box>
  );
}
