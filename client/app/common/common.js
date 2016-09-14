import angular from 'angular';
import Navbar from './navbar/navbar';
import PokeapiClient from './pokeapiClient/pokeapiClient';
import ThreeNumbersAlways from './threeNumbersAlways/threeNumbersAlways';

let commonModule = angular.module('app.common', [
  Navbar,
  PokeapiClient,
  ThreeNumbersAlways
])

.name;

export default commonModule;
