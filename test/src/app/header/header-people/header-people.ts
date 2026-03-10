import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../header';
import { Api } from '../../api';

@Component({
  selector: 'app-header-people',
  imports: [],
  templateUrl: './header-people.html',
  styleUrls: ['./header-people.scss'],
})
export class HeaderPeople implements OnInit {
  @Input() person1!: Person;

  // store a single person object for the template
  people: any = {};

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getData().subscribe({
      next: (res) => {
        // API returns { person: [...] } — take the first element (if any)
        this.people = (res && res.person && res.person.length) ? res.person[0] : {};
        console.log('HeaderPeople loaded person:', this.people);
      },
      error: (err) => console.error('Помилка отримання даних:', err)
    });
  }
}



 
//console.log(person1);
