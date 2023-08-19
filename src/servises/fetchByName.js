const getFetchByName = async name => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=d01e51005d6e36b3fa2b700cf557fb36&include_adult=false&language=en-US&page=1`,
    options
  );
  if (!response.ok) {
    throw new Error('Movie didn`t found');
  }
  const data = await response.json();

  return data;
};

export default getFetchByName;
