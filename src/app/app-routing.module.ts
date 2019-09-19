import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterLoginComponent } from './layout/users/waiter/waiter-login/waiter-login.component';
import { ChefLoginComponent } from './layout/users/chef/chef-login/chef-login.component';
import { FoodListComponent } from './layout/products/food-list/food-list.component';


const routes: Routes = [
  {path:'', component:WaiterLoginComponent},
  {path:'chef', component:ChefLoginComponent},
  {path:'dishes', component:FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
