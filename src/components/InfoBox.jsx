import { Typography } from '@mui/material';
import css from './InfoBox.module.css';
import MyRating from './MyRating';
import { dateConverter } from '../js/helpers/converteDate';
import Date from './Date';
import Description from './Description';
import AdditionInformation from './AdditionInformation';

export default function InfoBox({ title, releaseDate, rating, description }) {
  const convertedDate = dateConverter(releaseDate);

  return (
    <div className="infoBox">
      <Typography variant="h2" fontWeight={600} sx={{ marginBottom: '20px' }}>
        {title}
      </Typography>

      <div className={css.reliseWrapper}>
        <Date convertedDate={convertedDate} />
        <MyRating value={rating} />
      </div>
      <Description>{description}</Description>
      <AdditionInformation />
    </div>
  );
}
