// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
const pokemon:any = {
    "25": {
        name: "pikachu",
        sprites: { front_default: "http://exmaple.com/pikachu.png" }
    }
}
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`https://pokeapi.co/api/v2/pokemon/:id`, ({params}:{params:{id:string}}) => {
    const id = params.id;
    const pokemonData = pokemon[id];

    // ...and respond to them using this JSON response.
    if(pokemonData){
    return HttpResponse.json({...pokemonData}, {status: 200});
  }else{
    return HttpResponse.json({message: "Not Found"}, { status: 404 });
  }
  }),
]