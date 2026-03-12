import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
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

  people: any = {};

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.api.getData().subscribe({
      next: (res) => {
        this.people = (res && res.person && res.person.length) ? res.person[0] : {};
        console.log('HeaderPeople loaded person:', this.people);

        try { this.cdr.detectChanges(); } catch (e) {}
      },
      error: (err) => console.error('Помилка отримання даних:', err)
    });
  }
}



 
//console.log(person1);
