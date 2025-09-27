import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authForm: FormGroup;
  isLoginMode = true;
  otpSent = false;

  DataOFLOGIN: any = {
    Mobile: '970000000',
    OTP: '123456'
  }

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      otp: ['']
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  sendOTP() {
    if (this.authForm.get('phone')?.valid) {
      this.otpSent = true;
      alert('OTP sent to ' + this.authForm.value.phone);
    } else {
      alert('Enter valid phone number');
    }
  }

  onSubmit() {
    if (!this.otpSent) {
      alert('Please send OTP first');
      return;
    }
    if (this.authForm.get('otp')?.value) {
      if (this.authForm.get('otp')?.value == this.DataOFLOGIN.OTP) {
        alert('Logged in successfully!');
      } else {
        alert('Check OTP!');
      }
    } else {
      alert('Enter OTP');
    }
  }
}
