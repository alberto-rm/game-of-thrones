import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FinderService } from 'src/app/shared/Services/finder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langs: string[] = [];
  detailPage: Boolean = false;
  gallery: Boolean = false;
  message: any;
  input: any;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router,
    private finderService: FinderService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO').subscribe((res: string) => {});
    this.translate.stream('HOME').subscribe((res: string) => {});

    router.events.subscribe(() => {
      this.detailPage = false;
      this.gallery = false;

      if (
        window.location.href.includes('characters/') ||
        window.location.href.includes('houses/')
      ) {
        this.detailPage = true;
      } else if (
        window.location.href.includes('characters') ||
        window.location.href.includes('houses')
      ) {
        this.gallery = true;
      }
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  changeToEnglish() {
    this.translate.use('en');
  }

  goBack() {
    this._location.back();
  }

  ngOnInit(): void {
    this.finderService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  newMessage() {
    this.finderService.changeMessage(this.input);
  }
}
