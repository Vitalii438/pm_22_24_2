import { Component, Input } from '@angular/core';
import { Person } from '../header';

@Component({
  selector: 'app-header-people',
  imports: [],
  templateUrl: './header-people.html',
  styleUrls: ['./header-people.scss'],
})
export class HeaderPeople {
  @Input() person1!: Person;
}



 
//console.log(person1);
