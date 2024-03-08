import css from './Poster.module.css';
import { common } from '../js/helpers/common';

export default function Poster({ posterPath, title }) {
  return (
    <img
      className={css.detailsImg}
      src={
        posterPath
          ? `${common.imageBaseUrl}w500${posterPath}`
          : common.movieDefultImage
      }
      alt={`${title} poster`}
      width={500}
    />
  );
}
