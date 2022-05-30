import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

/**
 * Персонаж.
 *
 * @export
 * @class PersonComponent
 */
@Component({
  selector: 'rit-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {

  /**
   * Информация о персонаже.
   *
   * @type {(Person | undefined)}
   * @memberof PersonComponent
   */
  @Input()
  data: Person | undefined;

  constructor() { }
}
