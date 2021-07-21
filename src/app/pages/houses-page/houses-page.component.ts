import { Component, OnInit } from '@angular/core';
import { FinderService } from 'src/app/shared/Services/finder.service';
import { HousesService } from 'src/app/shared/Services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss'],
})
export class HousesPageComponent implements OnInit {
  houses: any;
  message: any;

  constructor(
    private housesService: HousesService,
    private finderService: FinderService
  ) {}

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((housesData: any) => {
      this.houses = housesData.filter((house: any) => house.logoURL);
      // this.houses = this.houses.filter((house: any) => {
      //   console.log(house.name.toLowerCase());
      //   return house.name.toLowerCase() != 'house amber';
      // });

      this.finderService.currentMessage.subscribe((message) => {
        this.houses = housesData.filter((house: any) => house.logoURL);
        this.houses = this.houses.filter((house: any) => {
          return (
            !house.name.toLowerCase().includes('amber') &&
            !house.name.toLowerCase().includes('blackmont') &&
            !house.name.toLowerCase().includes('botley') &&
            !house.name.toLowerCase().includes('frost') &&
            !house.name.toLowerCase().includes('wood') &&
            !house.name.toLowerCase().includes('user') &&
            !house.name.toLowerCase().includes('lothston') &&
            !house.name.toLowerCase().includes('manwoody') &&
            !house.name.toLowerCase().includes('qoherys') &&
            !house.name.toLowerCase().includes('towers')
          );
        });
        this.houses = this.houses.filter((house: any) =>
          house.name.toLowerCase().includes(message.toLowerCase())
        );
      });
    });
  }
}
