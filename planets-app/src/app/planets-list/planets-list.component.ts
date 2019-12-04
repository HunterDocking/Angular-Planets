import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet';
import { PlanetService } from '../planet.service';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  Planets: Planet[];
  Service: PlanetService;

  constructor(service: PlanetService) {
    this.Service = service;
  }

  ngOnInit() {
  }


  onClick() {
    this.Service.sortPlanets();
  }
}
