import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterLoginComponent } from './layout/users/waiter/waiter-login/waiter-login.component';
import { ChefLoginComponent } from './layout/users/chef/chef-login/chef-login.component';
import { FoodListComponent } from './layout/products/food-list/food-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WaiterLoginComponent,
    ChefLoginComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
