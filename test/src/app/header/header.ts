import { Component } from '@angular/core';

import { HeaderAbout } from './header-about/header-about';
import { HeaderAwards } from './header-awards/header-awards';
import { HeaderPeople } from './header-people/header-people';

@Component({
  selector: 'app-header',
  imports: [HeaderAbout, HeaderAwards, HeaderPeople],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
person1: Person = new Person('NEAL', 'BRIAN S.');
}

export interface People {
  name: string;
  surname: string;
}

export class Person implements People {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

//const person1 = new Person('NEAL', 'BRIAN S.');


