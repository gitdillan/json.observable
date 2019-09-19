import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-waiter-login',
  templateUrl: './waiter-login.component.html',
  styleUrls: ['./waiter-login.component.scss']
})
export class WaiterLoginComponent implements OnInit {

loginForm

  constructor(private fb:FormBuilder, private router:Router) { 

    this.loginForm=this.fb.group({

      username:['hellowaiter',[Validators.required]],
      password:['123123', [Validators.required]]

    })
  }

  onSubmit(){
    let formdata=this.loginForm.value;

    //console.log(formdata)
   
      this.router.navigate(['products/dishes'])
    }
  


  ngOnInit() {
  }

}
