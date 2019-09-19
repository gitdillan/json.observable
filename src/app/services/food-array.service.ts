import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodArrayService {


  constructor(private http:HttpClient) { 

    this.getDishes().subscribe(data=>{
     // console.log(data)
    }
    )

  }

  getDishes():Observable<any>{

    return this.http.get('./assets/data/foods.json')
  }
}
