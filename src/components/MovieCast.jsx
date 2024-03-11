import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { Typography } from '@mui/material';
import { ErrorMessage } from './ErrorMessage';
import CardSwiper from './CardSwiper';
import css from './MovieCast.module.css';
import { getCreditsById } from '../js/helpers/api';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getCreditsById(movieId);
        setCredits(resp.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && <ErrorMessage />}

      {credits?.length ? (
        <div className={css.wrapper}>
          <CardSwiper items={credits} />
        </div>
      ) : (
        <Typography>No information</Typography>
      )}

      {loader && (
        <Bars
          height="80"
          width="80"
          color="#747bff"
          ariaLabel="bars-loading"
          wrapperClass="loader"
          visible={true}
        />
      )}
    </>
  );
};
