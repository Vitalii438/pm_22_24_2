import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-content-contact',
  imports: [],
  templateUrl: './main-content-contact.html',
  styleUrls: ['./main-content-contact.scss'],
})
export class MainContentContact {
  @Output() clicked = new EventEmitter<string>(); 

  onButtonClick() {
    this.clicked.emit('Кнопку натиснули!');

    const toggleBlocks: NodeListOf<HTMLElement> = document.querySelectorAll(".contact");

    toggleBlocks.forEach((block: HTMLElement) => {
      const arrow = block.querySelector(".contact-arrow") as HTMLElement | null;
      const content = block.querySelector(".contact-content") as HTMLElement | null;

      if (arrow && content) {
        arrow.addEventListener("click", () => {
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotated");
        });
      }
    });
  }
}

