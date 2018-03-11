import { Component, Inject, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {FoodService} from './food.service';
import {SecondService} from './second.service';

import {HeaderComponent} from './header/header.component';
// import {Data1Service} from './header/data1.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'',
  styleUrls: ['./app.component.css'],
  providers:[FoodService, SecondService],
    // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.Native,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {


    myAllNames: Object = {
    	firstName: 'Mac',
    	lastName: 'John'
    };

    // getInfoFromHeaderComponent = function(et){
    // 	console.log(et);

     initialText = "Hi Sushil";

    getInfoFromHeaderComponent = function(event){
    	if(event.isUserLoggedOut == true){
    		this.initialText = "hi anonymous user";
    	}else{
    		this.initialText = 'hi you r still logged in';
    	}
    } 

    // fsvc;
    // // constructor( public foodSvc: FoodService);
    // constructor( public foodSvc: FoodService, @Inject (FoodService) foodServicez){
    //   this.fsvc = foodServicez;
    // }

    // Data : Object[];
    // getFood(){
    //   this.Data = this.foodSvc.getFood();
    // }

    
    // @ViewChild(HeaderComponent) headerComp;

    @ViewChildren(HeaderComponent) headerComps;
     callChildFunction(){
      // this.headerComp.demoFunction();
      // console.log(this.headerComps.first.demoFunction());
      // console.log(this.headerComps.last.demoFunction());
      console.log(this.headerComps.forEach(function(comp){
        console.log(comp);
      }) );
    }

    // *************Go to Other Route navigation****************

    // constructor(public router:Router){

    // }
    constructor(public router: Router) {}
    goToOtherRoute = function(email,password){
      console.log(email, password);
      // httprequest....email and password
      // response ok
      // response not ok-----error on the page
      if(email == 'abc@gmail.com' && password == '1234'){
        this.router.navigate(['/about']);
      }else{
        alert("username password does not match, login again");
      }
    }





















}
 

