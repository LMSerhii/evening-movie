export default function MovieReviewsDetails() {
  return (
    <ul className={css.reviewsList}>
      {slicedArrey(reviews).map(
        ({
          id,
          updated_at,
          content,
          author_details: { name, avatar_path },
        }) => {
          return (
            <li className={css.reviewsItem} key={id}>
              <div className={css.thumb}>
                <img
                  className={css.img}
                  src={
                    avatar_path
                      ? `${common.imageBaseUrl}w185${avatar_path}`
                      : common.defaultImg
                  }
                  alt={`poster`}
                  width={250}
                  loading="lazy"
                />
              </div>
              <p className={css.name}>{name}</p>
              <p className={css.date}>
                {new Date(updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className={css.content}>{content}</p>
            </li>
          );
        }
      )}
    </ul>
  );
}
