import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Bars } from 'react-loader-spinner';

import { ErrorMessage } from '../components/ErrorMessage';
import { MovieList } from '../components/MovieList';
import { LoadMoreBtn } from '../components/LoadMore';

import { getReviewsBySearch } from '../js/helpers/api';
import PageHeader from '../components/PageHeader';

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('params') ?? '';

  useEffect(() => {
    if (!params) return;

    (async () => {
      try {
        setLoader(true);
        setError(false);

        const response = await getReviewsBySearch({
          query: params,
          page,
        });

        setTotalPages(response.total_pages);

        setMovieList(prev => [...prev, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [page, params]);

  const handleSubmit = () => {
    setMovieList([]);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <PageHeader>Find your favorite movie</PageHeader>
      <SearchBar onSubmit={handleSubmit} setSearchParams={setSearchParams} />

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
