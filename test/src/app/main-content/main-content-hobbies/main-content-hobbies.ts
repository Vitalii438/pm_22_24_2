import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content-hobbies.html',
  styleUrls: ['./main-content-hobbies.scss'],
})
export class MainContentHobbies {
@Input() hobbies: string[] = [];
}


