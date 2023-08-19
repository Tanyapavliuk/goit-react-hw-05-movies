const getFetchById = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=d01e51005d6e36b3fa2b700cf557fb36&language=en-US`,
    options
  );
  if (!response.ok) {
    throw new Error('smth was wrong');
  }
  const data = await response.json();
  return data;
};

export default getFetchById;
