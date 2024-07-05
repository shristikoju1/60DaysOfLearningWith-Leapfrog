import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrl to styleUrls
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';
  public isSubmitting: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/product']);
      this.isSubmitting = false;
    }, 1000);
  }
}
