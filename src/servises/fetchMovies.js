const getTrandingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDFlNTEwMDVkNmUzNmIzZmEyYjcwMGNmNTU3ZmIzNiIsInN1YiI6IjY0ZGY3MDJlNWFiODFhMDBlMjViNWM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIEHGQtSCg2QAbSZiBv3N9YAouqZ8kZ5M1Eq0T6nfew',
    },
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  if (!response.ok) {
    throw new Error('smth was wrong');
  }
  const data = await response.json();
  return data;
};

export default getTrandingMovies;
