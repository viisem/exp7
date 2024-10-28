import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CrisisComponent } from './crisis/crisis.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }, 
  { path: 'heroes', component: HeroesComponent },
  { path: 'crisis', component: CrisisComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
