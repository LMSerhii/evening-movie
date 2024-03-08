import { Box, Divider, Typography } from '@mui/material';
import css from './InfoBox.module.css';
import MyRating from './MyRating';
import clsx from 'clsx';
import { dateConverter } from '../js/helpers/converteDate';
import Date from './Date';
import { NavLink, Outlet } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function InfoBox({ title, releaseDate, rating, description }) {
  const convertedDate = dateConverter(releaseDate);

  return (
    <div className="infoBox">
      <h1>{title}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <Date convertedDate={convertedDate} />
        <MyRating value={rating} />
      </div>
      <Box
        borderRadius="8px"
        my={5}
        p={2}
        border={'1px solid #182128'}
        bgcolor={'#11161C'}
      >
        <Typography>{description}</Typography>
      </Box>

      <Box
        borderRadius="8px"
        p={2}
        border={'1px solid #182128'}
        bgcolor={'#11161C'}
      >
        <Typography my={2} variant="h5">
          Additional information
        </Typography>
        <Divider
          style={{
            backgroundColor: '#27292C',
            height: '2px',
            marginBottom: '20px',
          }}
        />

        <Box display="flex" gap={2}>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </Box>
        <Outlet />
      </Box>
    </div>
  );
}
