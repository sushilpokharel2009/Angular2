import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  constructor() { }

  getMoreData(){
  	var foodData = [
  		{name:'Chicken', cost:123},
  		{name:'Potato', cost:234}
  		
  	]
  	return foodData;
  }

}
