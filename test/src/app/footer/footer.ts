import { Component } from '@angular/core';

import { FooterLanguages } from './footer-languages/footer-languages';
import { FooterLanguagesTop } from './footer-languages-top/footer-languages-top';

@Component({
  selector: 'app-footer',
  imports: [FooterLanguages, FooterLanguagesTop],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
