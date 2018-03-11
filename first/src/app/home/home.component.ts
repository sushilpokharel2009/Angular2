import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public currentRoute:ActivatedRoute) { 

  }
  parameter: any;

  ngOnInit() {
  	 console.log('home component initialized');
  	 this.currentRoute.params.subscribe(params=>{
  	 	this.parameter = params['id'];
  	 	console.log(this.parameter);
  	})
  }
  ngOnDestroy(){
  	console.log('home component destroyed');
  }

}
