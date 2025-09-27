import { Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

export const routes: Routes = [
    { path: '', component: PricingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'qr', component: QrCodeComponent },
];
