import css from './MovieCastDetails.module.css';
import { common } from '../js/helpers/common';

export default function MovieCastDetails({ arrey }) {
  return (
    <>
      <ul className={css.castList}>
        {arrey.map(({ credit_id, profile_path, name, character }) => {
          return (
            <li key={credit_id}>
              <img
                className={css.authorImg}
                src={
                  profile_path
                    ? `${common.imageBaseUrl}w185${profile_path}`
                    : common.castDefaultImage
                }
                alt="poster"
                width={250}
              />
              <p className={css.name}>{name}</p>
              <p className={css.character}>{`(${character})`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
