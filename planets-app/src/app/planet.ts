export class Planet {
    name: string;
    moons: number;
    distancefromSun: number;

    constructor(planetName: string, planetMoons: number, planetDistanceFromSun: number) {
        this.name = planetName;
        this.moons = planetMoons;
        this.distancefromSun = planetDistanceFromSun;
    }
}