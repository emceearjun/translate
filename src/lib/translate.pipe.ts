import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
import { Globals } from './globals';
import { of, Subject } from 'rxjs';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private _translateService: TranslateService,
    private _globals: Globals
  ) { }

  transform(key: any, args?: any): any {

    const subject = new Subject();

    // In case locale isn't provided in URL
    if (!this._globals.getLocale()) {
      return of(key);
    }

    this._translateService
      .getResource("../assets/" + this._globals.getLocale() + ".json")
      .subscribe(
        (data) => {
          const keyList = key.split(".");
          let value = data[keyList[0]];
          for (let i = 1; i < keyList.length; i++) {
            value = value[keyList[i]];
          }
          subject.next(value);
        }
      );

      return subject;

  }

}
