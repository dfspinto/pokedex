class PokemonviewController {

  constructor(pokeapiClientService, $stateParams, $http) {
    'ngInject';

    this._pokeapiClientService = pokeapiClientService;

    var url = 'http://pokeapi.co/api/v2/pokemon/'+$stateParams.id;
    this._pokeapiClientService.getPokemon(url, (err, pokemon) => {
        this.pokemon = pokemon;
    });

    this._pokeapiClientService.getPokemonDescription($stateParams.id, (err, pokemonDescription) => {
      this.pokemonDescription = pokemonDescription;
    });

    if (parseInt($stateParams.id) > 1) {
      var url2 = 'http://pokeapi.co/api/v2/pokemon/'+(parseInt($stateParams.id)-1);
      this._pokeapiClientService.getPokemon(url2, (err, previousPokemon) => {
        this.previousPokemon = previousPokemon;
      });
    }

    if (parseInt($stateParams.id) < 151) {
      var url3 = 'http://pokeapi.co/api/v2/pokemon/'+(parseInt($stateParams.id)+1);
      this._pokeapiClientService.getPokemon(url3, (err, nextPokemon) => {
        this.nextPokemon = nextPokemon;
      });
    }

  }

}

export default PokemonviewController;
