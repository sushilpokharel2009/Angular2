    import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation
     } from '@angular/core';

    @Component({
      selector: 'app-header',
      templateUrl: './header.component.html',
      styleUrls: ['./header.component.css'],
      encapsulation: ViewEncapsulation.Emulated,
    })
    export class HeaderComponent implements OnInit {

      constructor() { }

      ngOnInit() {
      }

      obj = {
      	title:'Acadgild'
      }
      gColor: String = 'green';

      ycolor:String = 'yellow-color';

      courses: Object[] = [
        {name:'Angular2', duration:24},
        {name:'HTML', duration:30},
        {name:'CSS', duration:40}
      ]

        h2class: String = 'h2-classes';
        greetings:String = 'Hello Good Morning';

        imgSrc = 'https://pixabay.com/en/nature-animal-world-3106213/';

        listenClick = (hhh) =>{
        	console.log('button is clicked', hhh);
        }
        // isLoggedIn = false;

        toggleButton = function(){
          this.isLoggedIn = ! this.isLoggedIn;
        }

        myNames : String = "hello";

        myEmail : String;

        changeEmail = function(emailss){
        console.log(emailss);
        }


        @Input('named') nm;

        dummyFunc = function(){
          // console.log(this.nm); 
          // this.customClick.emit('message from header to app');    
         this.customClick.emit({isUserLoggedOut : true});
       }
       @Output()
       customClick = new EventEmitter();

       user: Object = {
        email:'',
        pwd:''
       }
       loginMe = function(form){
        // console.log(form);
        console.log(this.user);
       }

       demoFunction(){
        console.log('viw child is working');
       }
  // ************pipes****************

      myBirthDate = new Date();

       // ******slice pipe********** 
       myCourse = 'Angular2 advanced';

       newcourses: String[]=[
          'Angular2',
          'Node Js',
          'Hadoop',
          'Java',
          'Python'
       ];

        customerObj = {
          name: "Acadgild",
          location: " India"
        }

        // **************number pipe************
        pi : number = 3.143143251451;
        a: number = 0.34254244;
        b: number = 4524354325;

        // *****************async pipe**********
        promise : Promise<String>
        onClick(){
          this.promise = new Promise<String> (function(resolve, reject){
            setTimeout (function(){
              resolve('I am coming little bit late, guys!!!');
            }, 3000)
          })
        }

        // ************look at video for ascending order/ descending order pipe**********
  }




















