import { Component, OnInit } from '@angular/core';
import { FoodArrayService } from 'src/app/services/food-array.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private dishes:FoodArrayService) { }

  disheslsit=""

  ngOnInit() {

    this.dishes.getDishes().subscribe(foods=>{

     this.disheslsit=foods

    })
  }

}
