
window.onload = function (){
    // let sortedMovies = sortMoviesByRank(movies)
    let button = document.querySelector('button');
    button.addEventListener('click',function(e){
        e.preventDefault();
        let sortType = document.querySelector('#sort-type').value;
        let sortedMovies = sortMoviesByAttributes(movies,sortType)
        // Displays movies list
        displayMovies(sortedMovies)
        document.querySelector("#sort-type").value = "";
    })
    let sortedMovies = sortMoviesByAttributes(movies)
    displayMovies(sortedMovies)

}

function displayMovies(movies){
    let table =
      "<table class='table table-striped' border='1' style='width: 100%' >";
    table +=
      "<thead><tr><th scope='col'>ID</th> <th scope='col'>Name</th> <th scope='col' >Rank</th></tr></thead>";
    for (let i=0; i<movies.length; i++){
        table += "<tbody><tr>";
        table += "<td>"+movies[i].id +"</td>";
        table += "<td>"+movies[i].title +"</td>";
        table += "<td>"+movies[i].rank +"</td>";
        table += "</tr></tbody>";
    }

    // Closint the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


// List of movies
let movies = [{
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

// A function to sort the movies by Rank
function sortMoviesByRank(movies){
    for (let j = 0; j < movies.length - 1; j++) {

        let max_obj = movies[j];
        let max_location = j;
        for (let i = j; i < movies.length; i++) {
            if (movies[i].rank > max_obj.rank) {
                max_obj = movies[i];
                max_location = i;
            }
        }
        // Swapping the first and last num
        movies[max_location] = movies[j]
        movies[j] = max_obj;
    }
    return movies
}

sortMoviesByRank(movies)

function sortMoviesByAttributes(movies,sortAttr){
    for (let j = 0; j < movies.length - 1; j++) {

        let max_location = j;
        let max = getMaxMovieObj(movies,j,sortAttr);
        max_obj = max.Max_obj;
        max_location = max.Max_index;

        // Swapping the first and last num
        movies[max_location] = movies[j]
        movies[j] = max_obj;
    }
    return movies
}

function getMaxMovieObj(movies,start=0,sortAttr){
    let max_obj = movies[start];
    let max_location = start;
    for (let i = start; i < movies.length; i++) {
        if (movies[i][sortAttr] > max_obj[sortAttr]) {
            max_obj = movies[i];
            max_location = i;
        }
    }
    return {
        Max_obj: max_obj,
        Max_index: max_location
    }
}