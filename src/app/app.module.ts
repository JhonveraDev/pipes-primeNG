import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCO);
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
