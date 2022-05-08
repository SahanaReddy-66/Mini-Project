import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { JuicesComponent } from './juices/juices.component';
import { IcecreamComponent } from './icecream/icecream.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitsComponent,
    VegetablesComponent,
    JuicesComponent,
    IcecreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
