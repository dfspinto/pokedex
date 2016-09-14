class PokemonlistController {

  constructor(pokeapiClientService) {
    'ngInject';
    this.name = 'pokemonlist';

    // the pokemons in the controller
    this.pokemons = [];

    // this helps us preventing getting pokemons before the previous
    // request is complete
    this.gettingPokemons = false;

    // make the injected service available in other functions
    this._pokeapiClientService = pokeapiClientService;
}

  getMore () {
    if(!this.gettingPokemons){
      this.gettingPokemons = true;
      this._pokeapiClientService.getPokemons(this.pokemons.length, (err, pokemons) => {
        Array.prototype.push.apply(this.pokemons, pokemons);
      this.gettingPokemons = false;
    });
    }
  }

  $onInit() {
    this.getMore();
  }

}

export default PokemonlistController;
