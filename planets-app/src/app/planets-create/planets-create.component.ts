import { Component, OnInit } from '@angular/core';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet';


@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
  newName: string;
  newMoons: number;
  newDistance: number;


  constructor(private planetService: PlanetService) {
  }

  ngOnInit() {
  }

  onClickNew() {
    this.planetService.addPlanet(new Planet(this.newName, this.newMoons, this.newDistance))
  }
}
