import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets.service';


@Component({
  selector: 'rit-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsComponent {

  /**
   * Список планет.
   *
   * @type {Observable<Planet[]>}
   * @memberof PlanetsComponent
   */
  planets$: Observable<Planet[]> = this.planetsService.getPlanets();

  /**
   * Creates an instance of PlanetsComponent.
   * @param {PlanetsService} planetsService
   * @memberof PlanetsComponent
   */
  constructor(private readonly planetsService: PlanetsService) { }
}
