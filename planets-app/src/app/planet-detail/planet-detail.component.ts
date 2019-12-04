import { Component, OnInit, Input, Output } from '@angular/core';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  
  @Input() Planet: Planet;
  
  Service: PlanetService;


  constructor(service: PlanetService) {
    this.Service = service;
  }

  ngOnInit() {
  }

  onClick(){
    this.Service.sortPlanets();
  }
  
}
