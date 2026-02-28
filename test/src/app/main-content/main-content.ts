import { Component } from '@angular/core';

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
  styleUrl: './main-content.scss',
})
export class MainContent {

}
