// fetch = function used for making HTTP req to fetch resources. (JSON style data, images, files)
// Simplifies asychronous data fetching in JS and used for interactinf with APIs to retieve and send data asynchronously over the web.
// fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//      .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//      })
//      .then(data => console.log(data.name))
//      .catch(error => console.error(error));

// ------------------------------------------------------
// fetchData();
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
