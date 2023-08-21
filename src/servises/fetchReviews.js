export const getRew = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDFlNTEwMDVkNmUzNmIzZmEyYjcwMGNmNTU3ZmIzNiIsInN1YiI6IjY0ZGY3MDJlNWFiODFhMDBlMjViNWM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIEHGQtSCg2QAbSZiBv3N9YAouqZ8kZ5M1Eq0T6nfew',
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  if (!response.ok) {
    throw new Error('Not found reviews');
  }
  const data = await response.json();
  return data;
};
