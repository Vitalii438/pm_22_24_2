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

}
