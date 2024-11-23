

    function _0x7566(_0xa54345,_0x1934f9){const _0x5ddda5=_0x5ddd();return _0x7566=function(_0x756680,_0x5bc5ad){_0x756680=_0x756680-0x6f;let _0x4f0064=_0x5ddda5[_0x756680];return _0x4f0064;},_0x7566(_0xa54345,_0x1934f9);}const _0x42d5dc=_0x7566;function _0x5ddd(){const _0x8995b3=['5952208QIjJuT','marvel','323321Hhrcpv','8PYpRNm','379995IncmrB','anime','movies','netflix','526692gYhAHX','getElementById','mediaSelect','13362JpGzMh','853347mSzSst','1336795xaFGwB','vivamax'];_0x5ddd=function(){return _0x8995b3;};return _0x5ddd();}(function(_0xf703bb,_0x548121){const _0x48511c=_0x7566,_0x308997=_0xf703bb();while(!![]){try{const _0x298fdd=-parseInt(_0x48511c(0x76))/0x1+parseInt(_0x48511c(0x7c))/0x2+parseInt(_0x48511c(0x71))/0x3*(-parseInt(_0x48511c(0x77))/0x4)+parseInt(_0x48511c(0x72))/0x5+-parseInt(_0x48511c(0x70))/0x6+-parseInt(_0x48511c(0x78))/0x7+parseInt(_0x48511c(0x74))/0x8;if(_0x298fdd===_0x548121)break;else _0x308997['push'](_0x308997['shift']());}catch(_0x44665d){_0x308997['push'](_0x308997['shift']());}}}(_0x5ddd,0x4f970));const apiKey='47a1a7df542d3d483227f758a7317dff',moviesContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x7a)),tvSeriesContainer=document['getElementById']('tvSeries'),marvelContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x75)),animeContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x79)),netflixContainer=document['getElementById'](_0x42d5dc(0x7b)),vivamaxContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x73)),searchInput=document[_0x42d5dc(0x7d)]('search'),searchResultsContainer=document[_0x42d5dc(0x7d)]('searchResults'),mediaSelect=document[_0x42d5dc(0x7d)](_0x42d5dc(0x6f)),companyId=0x24696;
    const horrorContainer = document.getElementById("horror");

    // Function to fetch and display popular movies
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );
      const data = await response.json();
      displayMovies(data.results);
    }
    
    
    
    
  async function fetchHorrorMovies() {

    const trendingUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

    try {
        const response = await fetch(trendingUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Filter movies by horror genre (ID: 27)
        const horrorMovies = data.results.filter(movie => 
            movie.genre_ids && movie.genre_ids.includes(27) // Check for horror genre
        );

        // Display the filtered horror movies
        displayHorrorMovies(horrorMovies);
    } catch (error) {
        console.error('Error fetching trending horror movies:', error);
    }
  }
    
    
    // Function to fetch and display popular TV series
    async function fetchTVSeries() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      displayTVSeries(data.results);
    }
   

    
      async function fetchAnimeTVShows() {
      const animeGenreId = 16;
      const response = await fetch(
        `https://api.themoviedb.org/3/keyword/210024/movies?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      displayAnime(data.results);
    }


    // Function to fetch Vivamax movies
    async function fetchVivamaxMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/company/${companyId}/movies?api_key=${apiKey}&language=en-US`
      );
      const data = await response.json();
      displayVivamax(data.results);
    }
    
   

  function initializeSwiper1() {
  new Swiper(".swiper-popular", {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    grabCursor: true,
    spaceBetween: 15,
    centeredSlides: false,
    freeMode: true,
    slidesPerView: "auto",
    autoplay: { delay: 2000 },
    scrollbar: { el: ".swiper-scrollbar", hide: true }
  });
  }
   
    
  function initializeSwiper2() {  
  new Swiper(".swiper-2", {
    loop: true,
    speed: 1000,
    grabCursor: true,
    spaceBetween: 15,
    centeredSlides: false,
    freeMode: true,
    slidesPerView: "auto",
    
    lazy: {
      loadOnTransitionStart: true,   // Starts loading images when transitioning to a new slide
      loadPrevNext: true,            // Loads images in neighboring slides for smoother navigation
    },

    // Scrollbar settings
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false,
    },
    
    observer: true,
    observeParents: true,

    on: {
      init: function() {
        this.update();
      },
    },
  });
  }
    
    
    
    function initializeProgressBars() {
  document.querySelectorAll(".circular-progress").forEach((progressBar) => {
    const ratingValue = parseFloat(progressBar.getAttribute("data-rating"));
    const progressColor = progressBar.getAttribute("data-progress-color");
    const bgColor = progressBar.getAttribute("data-bg-color");
    

    // Set the background based on the rating instantly
    progressBar.style.background = `conic-gradient(
      ${progressColor} ${ratingValue * 36}deg, 
      ${bgColor} ${ratingValue * 36}deg
    )`;
  });
  }
    
    
    async function fetchMovieImages(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}&language=en`);
  const data = await response.json();

  // Check if there are any English backdrops
  if (data.backdrops.length > 0) {
    return data.backdrops[0].file_path; // Return the first English backdrop path
  }

  // Fallback: fetch backdrops without specifying language if English is not available
  const fallbackResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
  const fallbackData = await fallbackResponse.json();

  return fallbackData.backdrops.length > 0 ? fallbackData.backdrops[0].file_path : null; // Return any available backdrop or null
  }

  async function displayDetails(card, movie, rating) {
  const backdropPath = await fetchMovieImages(movie.id);
  const imageUrl = backdropPath ? `https://image.tmdb.org/t/p/w500${backdropPath}` : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-VLNDBGMO8xZGWlbLfDKXa2RCqhljShc38FN-h7tFSTRnBAdqvf-5m6GQp3dxhQozWbRAe7d2AHlBae3sII-p0w9tDHVY1_nvg45mAs6K9b-fNnmvGFyhOcTqxzuYxNEW1MoEbHdeNvNoTM4QG3XCe5S_QBhSLfjSXnl9EIL4Kns3t0B175ymTH6d/s1600/QQQ.jpg';
  // Fallback image if no backdrop is found

  card.innerHTML = `
    <a href='https://streamlad.blogspot.com/p/watchingonstreamlad.html?movieId=${movie.id}' onclick='adLink()'>
      <div class='poster-wrapper'>
        <div class='play-hover'>
          <div class='playBut'>
            <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
              <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></polygon>
              <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></circle>
            </svg>
          </div>
        </div>
        <img alt='${movie.title}' src='${imageUrl}'/>
      </div>
      
      
      
      <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
        <div class='inner-circle'></div>
        <p class='rating'>${rating.toFixed(1)}</p>
      </div>
      <div class='title-year-wrapper'>
        <h3>${movie.title}</h3>
        <p class='released-year'>${new Date(movie.release_date).getFullYear()}</p>
      </div>
    </a>`;
  initializeProgressBars();
  }


  async function fetchTVImages(tvId) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${apiKey}&language=en`);
  const data = await response.json();

  // Check if there are any English backdrops
  if (data.backdrops.length > 0) {
    return data.backdrops[0].file_path; // Return the first English backdrop path
  }

  // Fallback: fetch backdrops without specifying language if English is not available
  const fallbackResponse = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${apiKey}`);
  const fallbackData = await fallbackResponse.json();

  return fallbackData.backdrops.length > 0 ? fallbackData.backdrops[0].file_path : null; // Return any available backdrop or null
  }

  async function displaytvDetails(card, tv, rating) {
  const backdropPath = await fetchTVImages(tv.id);
  const imageUrl = backdropPath ? `https://image.tmdb.org/t/p/w500${backdropPath}` : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-VLNDBGMO8xZGWlbLfDKXa2RCqhljShc38FN-h7tFSTRnBAdqvf-5m6GQp3dxhQozWbRAe7d2AHlBae3sII-p0w9tDHVY1_nvg45mAs6K9b-fNnmvGFyhOcTqxzuYxNEW1MoEbHdeNvNoTM4QG3XCe5S_QBhSLfjSXnl9EIL4Kns3t0B175ymTH6d/s1600/QQQ.jpg'; // Fallback image if no backdrop is found

  card.innerHTML = `
    <a href='https://streamlad.blogspot.com/p/watchingonstreamlad.html?tvId=${tv.id}' onclick='adLink()'>
     <div class='poster-wrapper'>
    <div class='play-hover'>
      <div class='playBut'>
        <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
          <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></polygon>
          <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></circle>
        </svg>
      </div>
    </div>
        <img alt='${tv.name}' src='${imageUrl}'/>
        </div>
    
     
         <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
        <div class='inner-circle'></div>
        <p class='rating'>${rating.toFixed(1)}</p> <!-- Display rating in the center -->
      </div>
      
       <div class='title-year-wrapper'>
      <h3>${tv.name}</h3>
      <p class='released-year'>${new Date(tv.first_air_date).getFullYear()}</p>
        </div>
   
    </a>`;
      initializeProgressBars();
  }

  function displayMovies(movies) {
  moviesContainer.innerHTML = ""; // Clear existing movies
  movies.forEach(async (movie) => {
    const card = document.createElement("div");
    card.className = "swiper-slide";
    const rating = movie.vote_average; // Use actual rating  
    await displayDetails(card, movie, rating); // Await displayDetails to ensure image fetch is completed
    moviesContainer.appendChild(card);
  });
  initializeSwiper1();
  }
    
  function displayTVSeries(tvSeries) {
  tvSeriesContainer.innerHTML = ""; // Clear existing TV series
  tvSeries.forEach(async (tv) => {
    const rating = tv.vote_average; // Use actual rating for TV series
    const card = document.createElement("div");
    card.className = "swiper-slide";
    await displaytvDetails(card, tv, rating); // Await displaytvDetails to ensure image fetch is completed
    tvSeriesContainer.appendChild(card);
  });

  // Initialize Swiper after all TV series cards are appended
  initializeSwiper2();
  } 
    

  // Function to display horror movies
  function displayHorrorMovies(movies) {
  horrorContainer.innerHTML = ""; // Clear existing content
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "swiper-slide";
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    horrorContainer.appendChild(card);
  });
  initializeSwiper2();

  }
    
    // Function to display anime
  function  displayAnime(movies) {
   animeContainer.innerHTML = ""; // Clear existing content
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "swiper-slide";
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    animeContainer.appendChild(card);
  });
  initializeSwiper2();

  }  
    
    
        // Function to display Vivamax movies
  function  displayVivamax(movies) {
   vivamaxContainer.innerHTML = ""; // Clear existing content
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "swiper-slide";
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    vivamaxContainer.appendChild(card);
  });
  initializeSwiper2();

  }   
    
    
    
    
    
    
    
    



   

    // Search function
  // Search function

    async function searchMedia() {
      const query = searchInput.value.trim();
      const mediaType = mediaSelect.value;
      const PopularMovies = document.getElementById("PopularMovies");
      const Horror = document.getElementById("Horror");
      const TVSeries = document.getElementById("TVSeries");
      const Anime = document.getElementById("Anime");
      const Vivamax = document.getElementById("Vivamax");
      const bgWrapper = document.getElementById("backgroundWrapper");

      if (query.length < 1) {
        PopularMovies.style.display = "block";
            Horror.style.display = "block";
        TVSeries.style.display = "block";
        Anime.style.display = "block";   
        Vivamax.style.display = "block";
        bgWrapper.style.display = "block";
        searchResultsContainer.innerHTML = "";

        return;
      } else {
        PopularMovies.style.display = "none";
            Horror.style.display = "none";
        TVSeries.style.display = "none";
        Anime.style.display = "none";
        Vivamax.style.display = "none";
        bgWrapper.style.display = "none";
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&query=${query}&include_adult=false`
      );
      const data = await response.json();
      displaySearchResults(data.results, mediaType);
    }

    function displaySearchResults(results, mediaType) {
      searchResultsContainer.innerHTML = "";

      results.forEach((item) => {
        if (item.vote_average > 0 && item.poster_path) {
          const card = document.createElement("div");
          card.className = "search-image";
    const rating = item.vote_average; // Rating to pass to the progress bar
          card.innerHTML = `
    
                 <a href='https://streamlad.blogspot.com/p/watchingonstreamlad.html?${mediaType}Id=${             item.id           }' onclick='adLink()'>
           <div class='search-poster-container'>    
           <div class='play-hover'>
          <div class='playBut'>
            <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
              <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></polygon>
              <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'></circle>
            </svg>
          </div>
        </div>
           <img alt='${item.title || item.name}' src='https://image.tmdb.org/t/p/w500${                       item.poster_path                     }'/>
                  </div>
                  
                   <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
                           <div class='inner-circle'>
                        <p class='rating'>${rating.toFixed(1)}</p>
                   </div>
                           </div>
               
               <div class='search-title-year'>
               <h3 class='search-title'>${item.title || item.name}</h3> 
                    <h3 class='search-year'>${
                      mediaType === "movie"
                        ? `${new Date(item.release_date).getFullYear()}`
                        : `${new Date(item.first_air_date).getFullYear()}`
                    }</h3>
                </div>
                </a>

                
            `;
          searchResultsContainer.appendChild(card);
     initializeProgressBars();
        }
    
      });
    }

    searchInput.addEventListener("input", searchMedia);
    mediaSelect.addEventListener("change", () => {
      searchInput.value = "";
      searchResultsContainer.innerHTML = "";
    });
    
    
    
    
         document.addEventListener("contextmenu", event => event.preventDefault());
  document.addEventListener("keydown", event => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    event.preventDefault(); // Disable DevTools shortcuts
  }
  });
    
    


    
      document.addEventListener("DOMContentLoaded", () => {
         fetchMovies();
    fetchHorrorMovies();
    fetchTVSeries();
    fetchAnimeTVShows();
    fetchVivamaxMovies();
    fetchMarvelMovies();
    fetchNetflixMovies();
    });



