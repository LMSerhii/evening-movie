export function dateConverter(releaseDate) {
  const convertedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return convertedDate;
}
