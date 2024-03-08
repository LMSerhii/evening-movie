import css from './MovieDetails.module.css';
import Poster from './Poster';
import InfoBox from './InfoBox';

export const MovieDetails = ({
  title,
  posterPath,
  description,
  releaseDate,
  rating,
}) => {
  return (
    <div className={css.detailsBox}>
      <Poster posterPath={posterPath} title={title} />
      <InfoBox
        title={title}
        releaseDate={releaseDate}
        rating={rating}
        description={description}
      />
    </div>
  );
};
