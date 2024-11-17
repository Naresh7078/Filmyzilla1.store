// Dynamic movie data (you can replace this with data from an API later)
const movies = [
  {
    title: "Avengers: Endgame",
    image: "images/avengers-endgame.jpg",
    releaseDate: "April 26, 2019",
    url: "https://www.example.com/avengers-endgame"
  },
  {
    title: "Spider-Man: No Way Home",
    image: "images/spider-man-no-way-home.jpg",
    releaseDate: "December 17, 2021",
    url: "https://www.example.com/spider-man-no-way-home"
  },
  {
    title: "The Batman",
    image: "images/the-batman.jpg",
    releaseDate: "March 4, 2022",
    url: "https://www.example.com/the-batman"
  },
  // Add more movies as required
];

// Function to display movies dynamically
function displayMovies() {
  const movieContainer = document.querySelector('.movie-container');
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    
    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="title">${movie.title}</div>
      <div class="release-date">${movie.releaseDate}</div>
      <a href="${movie.url}" target="_blank">Download</a>
    `;
    
    movieContainer.appendChild(movieCard);
  });
}

// Call the displayMovies function to render the movies on the page
window.onload = displayMovies;
