import { Box, Typography } from '@mui/material';

export default function Description({ children }) {
  return (
    <Box
      borderRadius="8px"
      my={5}
      p={2}
      border={'1px solid #182128'}
      // bgcolor={'#11161C'}
      bgcolor={'#0E1A28'}
    >
      <Typography>{children}</Typography>
    </Box>
  );
}
