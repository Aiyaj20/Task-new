import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatagetService {

  constructor() { }
  private planSource = new BehaviorSubject<any>(null);
  currentPlan$ = this.planSource.asObservable();

  setPlan(plan: any) {
    this.planSource.next(plan); // update the plan
  }
}
