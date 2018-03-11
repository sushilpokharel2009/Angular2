import { Injectable } from '@angular/core';
import { SecondService } from './second.service'


@Injectable()
export class FoodService {

  constructor(public  secondSvc:SecondService) { }

  getFood(){
  	let dishes : Object[];
  		// {name: 'Biryani', cost:200},
  		// {name: 'Daal', cost:150}

  	var someDishes = { name:'rice', cost:34323 };
  	dishes = this.secondSvc.getMoreData();
  	dishes.push(someDishes);
  	return dishes;
  }

}
