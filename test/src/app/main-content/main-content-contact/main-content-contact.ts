import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-content-contact',
  imports: [],
  templateUrl: './main-content-contact.html',
  styleUrls: ['./main-content-contact.scss'],
})
export class MainContentContact {
  @Output() clicked = new EventEmitter<string>();

  onToggle(event: Event) {
    this.clicked.emit('Кнопку натиснули!');

    const arrow = event.currentTarget as HTMLElement | null;
    if (!arrow) return;

    const contact = arrow.closest('.contact') as HTMLElement | null;
    if (!contact) {
      const content = arrow.parentElement?.parentElement?.querySelector('.contact-content') as HTMLElement | null;
      if (content) content.classList.toggle('hidden');
      arrow.classList.toggle('rotated');
      return;
    }

    const content = contact.querySelector('.contact-content') as HTMLElement | null;
    if (content) content.classList.toggle('hidden');
    arrow.classList.toggle('rotated');
  }
}

