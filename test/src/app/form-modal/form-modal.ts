import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Api } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form-modal.html',
  styleUrl: './form-modal.scss',
})

export class FormModal {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private dialogRef: MatDialogRef<FormModal>, private api: Api, private router: Router) {}

  loggedIn = localStorage.getItem('loggedIn') === 'true';

onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;

      this.api.postData(data).subscribe({
        next: (response) => {
          localStorage.setItem('loggedIn', 'true');
          this.router.navigate(['/main-content']);
          console.log('Дані успішно відправлені:', response);
          this.dialogRef.close(response); 
        },
        error: (err) => {
          console.error('Помилка при відправці:', err);
        }
      });
    }
  }

logout() {
  localStorage.removeItem('loggedIn');

  this.router.navigate(['']);
  this.dialogRef.close();
  //location.reload();
  console.log('Користувач вийшов з акаунту');
}

  close() {
    this.dialogRef.close();
  }
}