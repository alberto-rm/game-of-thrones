import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { HouseDetailPageComponent } from './pages/house-detail-page/house-detail-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    CharacterDetailPageComponent,
    HousesPageComponent,
    HouseDetailPageComponent,
    ChronologyPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SimplebarAngularModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
