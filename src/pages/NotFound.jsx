import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function NotFound() {
  return (
    <Box
      height={'75vh'}
      display="flex"
      flexDirection={'column'}
      alignItems="center"
      justifyContent={'center'}
      gap={4}
      borderRadius="8px"
      my={5}
      p={3}
      border={'1px solid #182128'}
      bgcolor={'#11161C'}
    >
      <Typography variant="h1">404</Typography>
      <Typography>
        Most likely, the developers are resting, so you should go home.
      </Typography>
      <Button variant="outlined" href="/">
        Go Home
      </Button>
    </Box>
  );
}
