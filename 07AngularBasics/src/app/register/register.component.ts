import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public fullname: string;
  public email: string;
  public password: string;
  public isSubmitting: boolean = false;

  constructor(private router: Router) {
    this.fullname = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    setTimeout(() => {
      this.fullname = 'Ram Thapa';
    }, 2000);
  }

  onSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Full Name:', this.fullname);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/login']);
      this.isSubmitting = false;
    }, 1000);
  }
}
