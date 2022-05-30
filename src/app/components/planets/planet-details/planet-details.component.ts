import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetDetails } from 'src/app/interfaces/planet-details.interface';
import { PlanetsService } from 'src/app/services/planets.service';

/**
 * Выводит информацию о планете и ее обитателей. 
 *
 * @export
 * @class PlanetDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'rit-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetDetailsComponent {

  /**
   * Информация о планете вместе с обитателями.
   *
   * @type {Observable<PlanetDetails>}
   * @memberof PlanetDetailsComponent
   */
  planetDetails$: Observable<PlanetDetails> = this.planetService.getPlanet(this.route.snapshot.params['id'])

  /**
   * Creates an instance of PlanetDetailsComponent.
   * @param {ActivatedRoute} route
   * @param {PlanetsService} planetService
   * @memberof PlanetDetailsComponent
   */
  constructor(private readonly route: ActivatedRoute,
    private readonly planetService: PlanetsService) { }

}
