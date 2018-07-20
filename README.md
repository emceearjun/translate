# translate
<b>translate</b> provides a simple extension to help integrate internationalization with your Angular application.

## Usage

#### Component
First step is to import `TranslateModule` into your NgModule
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateModule } from 'projects/translate/src/lib/translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Translations
Place two files `en.json` and `fr.json` directly in your `assets` folder with the following content:<br>
<b>Note:</b> Replace "hello" with your desired translation in `fr.json`
```json
{
    "h1": {
        "heading": "hello"
    }
}
```

#### Template
Now, use the `translate` pipe in your template file as follows:
```html
<h1>{{"h1.heading" | translate | async}}</h1>
```

#### Running the application
For your translation to work, you need to provide your locale as a search parameter with your URL:
```
http://localhost:4200/?locale=en
http://localhost:4200/?locale=fr
```

Voila! That's it!
