import { NgModule } from '@angular/core';
import { TranslateComponent } from './translate.component';
import { TranslatePipe } from './translate.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { Globals } from './globals';

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
