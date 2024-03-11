import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import css from './MovieReviews.module.css';
import { getReviewsById } from '../js/helpers/api';
import { ErrorMessage } from './ErrorMessage';
import ReviewsSwiper from './ReviewsSwiper';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getReviewsById(movieId);
        setReviews(resp.results);
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

      <div className={css.reviews}>
        {reviews?.length ? (
          <ReviewsSwiper items={reviews} />
        ) : (
          <p className={css.noInfo}>No information</p>
        )}
      </div>

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
