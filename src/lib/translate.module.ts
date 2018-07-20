import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, NgModule } from '@angular/core';
import { Globals } from './globals';
import { TranslateComponent } from './translate.component';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [TranslateComponent, TranslatePipe],
  exports: [TranslateComponent, TranslatePipe],
  providers: [
    HttpClient,
    Globals
  ]
})
export class TranslateModule { }
