import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BASE_URL } from 'src/app/constants';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'rit-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetComponent{

  @Input()
  data: Planet | undefined;

  constructor() { }

  /**
   * Id планеты.
   *
   * @readonly
   * @type {string}
   * @memberof PlanetComponent
   */
  get planetId(): string {
    return this.data?.url.replace(`${BASE_URL}/planets/`, '').replace('\/', '') || ""
  }

  /**
   * Url страницы планеты.
   *
   * @readonly
   * @type {string}
   * @memberof PlanetComponent
   */
  get planetUrl(): string {
    return `/planets/${this.planetId}`
  }

}
