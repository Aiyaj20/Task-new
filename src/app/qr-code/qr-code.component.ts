import { Component } from '@angular/core';
import { DatagetService } from '../services/dataget.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import QRious from 'qrious';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  constructor(private router: Router, private dataService: DatagetService) { }

  plan: any;
  ngOnInit(): void {
    this.dataService.currentPlan$.subscribe(plan => {
      this.plan = plan;
    });
    if (this.plan) {
      let name = this.plan.name + ' ' + this.plan.price + ' ' + this.plan.description;
      this.generateQRCode(name)
    } else {
      this.router.navigate(['']);
    }
  }
  Loginpage() {
    this.router.navigate(['/login']);
  }

  isLoginMode = true;
  otpSent = false;


  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  generateQRCode(data: string): void {
    try {
      const qr = new QRious({
        value: data,
        size: 150
      });
      this.plan.qrCodeDataURL = qr.toDataURL();
    } catch (error) {
      console.error('QR Code generation failed:', error);
      this.generateQRCodeFromAPI(encodeURIComponent(data));
    }
  }

  generateQRCodeFromAPI(encodedData: string): void {
    this.plan.qrCodeDataURL = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|0&chl=${encodedData}`;
  }
}
