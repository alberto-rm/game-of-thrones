import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CharactersService } from 'src/app/shared/Services/characters.service';
import { FinderService } from 'src/app/shared/Services/finder.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: any;
  titleClass: string = 'c-gallery__title--hide';
  message: any;

  constructor(
    private charactersService: CharactersService,
    private finderService: FinderService
  ) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      this.characters = charactersData;
      this.finderService.currentMessage.subscribe((message) => {
        this.characters = charactersData;
        this.characters = this.characters.filter((character: any) =>
          character.name.toLowerCase().includes(message.toLowerCase())
        );
      });
    });
  }
}
