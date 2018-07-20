import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private URL_PARAM_NAME = "lang";

  constructor(
    private _httpClient: HttpClient,
    private _globals: Globals
  ) {
    this._globals.updateLocale(this.getLocaleFromUrl(), null);
  }

  public getResource(url: string): Observable<Object> {
    return this._httpClient.get(url);
  }

  private getLocaleFromUrl() {
    const paramList = window.location.search.slice(1).split('&');
    for (let i = 0; i < paramList.length; i++) {
      const paramArr = paramList[i].split('=');
      if (paramArr[0] === this.URL_PARAM_NAME) {
        return paramArr[1];
      }
    }
  }

  public setLocale(locale: string): void {
    this.getResource('../assets/' + locale + '.json').subscribe(
      (data) => {
        this._globals.updateLocale(locale, data);
      });
  }
}
