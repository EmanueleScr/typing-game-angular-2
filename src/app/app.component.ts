import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  randomTxt = lorem.sentence(); //generato dal modulo Faker installato con npm
  userTxt = '';

  onInput(e){
    this.userTxt = e;
  }

  onCompare(randomLetter:string, userLetter:string){
    if(!userLetter){
      return 'no_user_input'
      console.log('no input')
    }
    
    return randomLetter === userLetter ? 'green_txt' : 'red_txt';
  }

}
