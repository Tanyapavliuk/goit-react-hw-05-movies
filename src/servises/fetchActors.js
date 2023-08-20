const getActors = async id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d01e51005d6e36b3fa2b700cf557fb36&language=en-US`,
    options
  );
  if (!response.ok) {
    throw new Error('Actors not found');
  }
  const data = await response.json();
  return data;
};
export default getActors;
