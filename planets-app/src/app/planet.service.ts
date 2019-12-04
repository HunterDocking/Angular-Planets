import { Injectable } from '@angular/core';

import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  PLANETS: Planet[] = [];

  constructor() { }


  // Add a new planet to the array of planets
  addPlanet(planet: Planet) {
    this.PLANETS.push(planet);
  }
  

  // Sort existing planets by the distance from sun
  sortPlanets() {
    this.PLANETS = this.PLANETS.sort(function (a, b) {
      var planet1 = a.distancefromSun;
      var planet2 = b.distancefromSun;

      return planet1 - planet2;
    });
  }

  // Delete a planet from the array of existing planets 
  deletePlanet(Planet: Planet) {
    const index: number = this.PLANETS.indexOf(Planet);
    if (index !== -1) {
      this.PLANETS.splice(index, 1)
    }
  }
}
