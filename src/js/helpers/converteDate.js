export function dateConverter(date) {
  const convertedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return convertedDate;
}
