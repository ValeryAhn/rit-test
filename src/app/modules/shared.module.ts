import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from '../components/planets/planets.component';
import { PlanetComponent } from '../components/planets/planet/planet.component';
import { PlanetDetailsComponent } from '../components/planets/planet-details/planet-details.component';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from '../components/people/people.component';
import { PersonComponent } from '../components/people/person/person.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetComponent,
    PlanetDetailsComponent,
    PeopleComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    PlanetsComponent
  ]
})
export class SharedModule { }
