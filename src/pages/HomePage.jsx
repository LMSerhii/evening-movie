import { useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { useState } from 'react';
import { getData } from '../js/helpers/api';
import { LoadMoreBtn } from '../components/LoadMore';
import { ErrorMessage } from '../components/ErrorMessage';
import { Bars } from 'react-loader-spinner';
import PageHeader from '../components/PageHeader';

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoader(true);
        setError(false);
        const response = await getData({
          abortController: controller,
          page,
        });
        setTotalPages(response.total_pages);

        setMovieList(prev => [...prev, ...response.results]);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <PageHeader>Trending movie today</PageHeader>
      {error && <ErrorMessage />}

      {movieList.length > 0 && <MovieList movieList={movieList} />}

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

      {movieList.length > 0 && !loader && page < totalPages && (
        <LoadMoreBtn onClick={handleClick} />
      )}
    </main>
  );
}
