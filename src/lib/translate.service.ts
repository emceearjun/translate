import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    this._globals.LOCALE = this.getLocaleFromUrl();
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
}
