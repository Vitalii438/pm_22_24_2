import { Component, Input, OnInit, ChangeDetectorRef, EventEmitter, Output  } from '@angular/core';
import { Person } from '../header';
import { Api } from '../../api'; 
import { MatDialog } from '@angular/material/dialog';
import { FormModal } from '../../form-modal/form-modal'; 

@Component({
  selector: 'app-header-people',
  imports: [],
  templateUrl: './header-people.html',
  styleUrls: ['./header-people.scss'],
})
export class HeaderPeople implements OnInit {
  @Input() person1!: Person;

  people: any = {};

  constructor(private api: Api, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

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

 onToggle() {
    // відкриваємо модальне вікно замість toggle класів
    const dialogRef = this.dialog.open(FormModal, {
      width: '400px',   // можна задати розмір
      data: { source: 'toggle-click' } // можна передати дані в модальне
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Модальне повернуло дані:', result);
      }
    });
  }

}



 
//console.log(person1);
