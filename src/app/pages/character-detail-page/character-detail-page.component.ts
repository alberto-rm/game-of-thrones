import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/Services/characters.service';
import { HousesService } from 'src/app/shared/Services/houses.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss'],
})
export class CharacterDetailPageComponent implements OnInit {
  character: any;
  house: any;

  constructor(
    private characterService: CharactersService,
    private houseService: HousesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameCharacter = params.get('nameCharacter');

      this.characterService
        .getCharacter(nameCharacter)
        .subscribe((character) => {
          this.character = character;

          this.houseService
            .getHouse(this.character.house)
            .subscribe((house: any) => {
              this.house = house[0];
            });
        });
    });
  }
}
