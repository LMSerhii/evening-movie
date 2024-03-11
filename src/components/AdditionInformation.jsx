import { NavLink, Outlet } from 'react-router-dom';
import { Box, Divider, Typography } from '@mui/material';
import clsx from 'clsx';
import css from './AdditionInformation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AdditionInformation() {
  return (
    <Box
      borderRadius="8px"
      p={2}
      border={'1px solid #182128'}
      bgcolor={'#0f1924'}
    >
      <Typography my={2} variant="h5">
        Additional information
      </Typography>
      <Divider
        sx={{
          backgroundColor: '#27292C',
          height: '2px',
          marginBottom: '20px',
        }}
      />
      <div className={css.tabWrapper}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </Box>
  );
}
