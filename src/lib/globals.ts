import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    private LOCALE: string = null;
    private RESOURCE: Object = null;

    updateLocale(locale: string, resource: Object) {
        this.LOCALE = locale;
        this.RESOURCE = resource;
    }

    getLocale(): string {
        return this.LOCALE;
    }

    getResource(): Object {
        return this.RESOURCE;
    }
}