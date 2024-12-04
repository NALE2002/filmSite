const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlZjBiZmExYzJmMmZkOTBkYzQ2MzUzNDNmZTY5NSIsIm5iZiI6MTczMzIxNjM5Mi43ODcwMDAyLCJzdWIiOiI2NzRlYzg4ODBhNWY3ZmRiMTM2OTUxNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1qfsTJU9zqM_W5Z5xjUwX-4fGPo30kHoZmpfZufSPB4'
  }
};

fetch(url, options)
  .then(res => res.json())
  // .then(json => console.log(json))

  .then(data => {
    const moviesContainer = document.getElementById("movies");
    moviesContainer.innerHTML = data.results

    .map(movie => 
        ` <div class="text-center"> 
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
          <p>rating: ${movie.vote_average}</p>
        </div> `
    )

    .join('');

  })

  .catch(err => console.error(err));
