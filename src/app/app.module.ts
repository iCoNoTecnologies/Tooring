import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
