import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Genders } from 'src/app/enums/genders';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'rit-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {

  /**
   * Список людей.
   *
   * @type {(Person[] | undefined)}
   * @memberof PeopleComponent
   */
  @Input()
  data: Person[] | undefined;

  /**
   * Фильтр по полу существа.
   *
   * @type {Genders[]}
   * @memberof PeopleComponent
   */
  filter: string = 'All';

  /**
   * Список полов.
   *
   * @memberof PeopleComponent
   */
  genders = Genders;

  /**
   * Creates an instance of PeopleComponent.
   * @memberof PeopleComponent
   */
  constructor() { }

  /**
   * Обработчик выбора фильтра.
   *
   * @param {MatSelectChange} data
   * @memberof PeopleComponent
   */
  filterSelect(data: MatSelectChange) {
    console.warn(data)
    this.filter = data.value;
  }

  /**
   * Отфильтрованный список обитателей.
   *
   * @readonly
   * @type {Person[]}
   * @memberof PeopleComponent
   */
  get people(): Person[] {
    if (this.filter === 'All' && this.data) {
      return this.data;
    }
    return this.data?.filter((person: Person) => person.gender.toLowerCase() === this.filter.toLowerCase()) || [];
  }

}