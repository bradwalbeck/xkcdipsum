import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { xkcdTextService } from './services/xkcdtext.service';
import { ContainerComponent } from './components/container.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [xkcdTextService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
