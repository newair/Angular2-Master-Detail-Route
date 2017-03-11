import { MasterDetailModule } from './master-detail/master-detail.module';
import { DefaultComponent } from './default.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DefaultComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasterDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
