import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Header } from './header/header';
import { MainContent } from './main-content/main-content';
import { Footer } from './footer/footer';

// import { FooterLanguages } from './footer/footer-languages/footer-languages';
// import { FooterLanguagesTop } from './footer/footer-languages-top/footer-languages-top';

// import { HeaderAbout } from './header/header-about/header-about';
// import { HeaderAwards } from './header/header-awards/header-awards';
// import { HeaderPeople } from './header/header-people/header-people';

// import { MainContentContact } from './main-content/main-content-contact/main-content-contact';
// import { MainContentEducation } from './main-content/main-content-education/main-content-education';
// import { MainContentExperience } from './main-content/main-content-experience/main-content-experience';
// import { MainContentHobbies } from './main-content/main-content-hobbies/main-content-hobbies';
// import { MainContentReferences } from './main-content/main-content-references/main-content-references';
// import { MainContentSkills } from './main-content/main-content-skills/main-content-skills';

 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, Header, MainContent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
} 
 