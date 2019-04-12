import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { XkcdTextService } from './services/xkcdtext.service';
import { ContainerComponent } from './components/container/container.component';
import { IpsumContainerComponent } from './components/ipsumcontainer/ipsumcontainer.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    IpsumContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [XkcdTextService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
