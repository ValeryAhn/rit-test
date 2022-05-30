import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailsComponent } from './components/planets/planet-details/planet-details.component';
import { PlanetsComponent } from './components/planets/planets.component';

const routes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'planets/:id', component: PlanetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
