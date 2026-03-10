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

  people: any = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getData().subscribe({
      next: (res) => this.people = res.person,
      error: (err) => console.error('Помилка отримання даних:', err)
    });
  }
}



 
//console.log(person1);
