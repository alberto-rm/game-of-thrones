import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HouseDetailPageComponent } from './pages/house-detail-page/house-detail-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:nameCharacter', component: CharacterDetailPageComponent},
  {path: 'houses', component: HousesPageComponent},
  {path: 'houses/:houseName', component: HouseDetailPageComponent},
  {path: 'chronology', component: ChronologyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
