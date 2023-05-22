import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import{HttpClientModule} from '@angular/common/http';
import { PastaComponent } from './pasta/pasta.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
