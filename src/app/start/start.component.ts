import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  let playerOne: Character = new Character(health);

  submitQuestionOne(answer: number){
    if (answer === 1){
       this.health = 0;
    } else if (answer === 2){
      this.health += 5;
    }else{
      this.health -= 5;
    }
      
  }

  constructor() { }

  ngOnInit() {
  }

}
