import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetDetails } from 'src/app/interfaces/planet-details.interface';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'rit-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetDetailsComponent implements OnInit {

  planetDetails$: Observable<PlanetDetails> = this.planetService.getPlanet(this.route.snapshot.params['id'])

  constructor(private readonly route: ActivatedRoute,
    private readonly planetService: PlanetsService) { }

  ngOnInit(): void {
    this.planetDetails$.subscribe(planet => console.warn(planet));
  }

}
