import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatagetService } from '../services/dataget.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans: any[] = [
    {
      name: 'ROYAL BOX',
      tag: 'PREMIUM PICK',
      price: '₹51,000',
      description: 'The ultimate access for those who demand the best',
      features: [
        { text: '30 Trading Days: Full access. Full potential.', available: true },
        { text: 'Highest accessible.', available: true },
        { text: 'Well designed for derivative segment.', available: true },
        { text: 'Access of Two paper bots.', available: true },
        { text: 'Access to Live Reports.', available: true },
        { text: 'Early access to all new features.', available: true },
      ],
    },
    {
      name: 'ELITE',
      tag: 'POPULAR',
      subtitle: 'The ultimate access for those who demand the best',
      price: '₹6,990',
      description: 'All the right tools to boost your experience.',
      features: [
        { text: '10 Trading Days: Two Weeks to Level Up.', available: true },
        { text: 'Moderate–High accessible.', available: true },
        { text: 'Well designed for cash segment.', available: true },
        { text: 'Access of One paper bot.', available: true },
        { text: 'Access to Live Reports.', available: true },
        { text: 'Early access to all new limited features.', available: true },
      ],
    },
    {
      name: 'BUSINESS',
      tag: 'BEST SELLER',
      price: '₹3,990',
      description: 'Essential benefits to get you started strong.',
      features: [
        { text: '5 Trading Days: Explore Fast. Decide Smart.', available: true },
        { text: 'Moderate accessible.', available: true },
        { text: 'Well designed for cash segment.', available: true },
        { text: 'Access of One paper bot.', available: true },
        { text: 'Access to Live Reports.', available: true },
        { text: 'Early access to limited features.', available: false },
      ],
    },
  ];

  constructor(private router: Router, private dataSer: DatagetService) { }

  goToQr(plan: any) {
    this.dataSer.setPlan(plan);
    this.router.navigate(['/qr']);
  }
}
