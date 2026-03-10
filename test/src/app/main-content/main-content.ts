import { Component } from '@angular/core';
import { Api } from '../api';

import { MainContentContact } from './main-content-contact/main-content-contact';
import { MainContentEducation } from './main-content-education/main-content-education';
import { MainContentExperience } from './main-content-experience/main-content-experience';
import { MainContentHobbies } from './main-content-hobbies/main-content-hobbies';
import { MainContentReferences } from './main-content-references/main-content-references';
import { MainContentSkills } from './main-content-skills/main-content-skills';

@Component({
  selector: 'app-main-content',
  imports: [MainContentContact, MainContentEducation, MainContentExperience, MainContentHobbies, MainContentReferences, MainContentSkills],
  templateUrl: './main-content.html',
  styleUrls: ['./main-content.scss'],
})
export class MainContent {
  constructor(private api: Api) {}

  Clicked(message: string) {
    console.log('Отримано повідомлення:', message); 
    const payload = { message, time: new Date().toISOString() };
    this.api.postData(payload).subscribe({
      next: (res) => console.log('Повідомлення відправлено', res),
      error: (err) => console.error('Помилка відправки повідомлення:', err),
    });
  }

hobbies: string[] = ['WRITING', 'READING BOOKS', 'PLAYING FOOTBALL', 'PHOTOGRAPHY', 'TRAVELING'];
} 


// 'WRITING', 'READING BOOKS', 'PLAYING FOOTBALL', 'PHOTOGRAPHY', 'TRAVELING'