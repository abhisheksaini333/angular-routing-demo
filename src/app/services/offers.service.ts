import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: any[] = [
    { discount: 0.5, type: "Savings", valid: new Date(), gender: 'Female', category: "Accounts" },
    { discount: 0.2, type: "Business", valid: new Date(), gender: 'Male', category: "Accounts" },
    { discount: 0.3, type: "Current", valid: new Date(), gender: 'Female', category: "Accounts" },
    { discount: 0.5, type: "Home Loan", valid: new Date(), gender: 'Female', category: "Loans" },
    { discount: 0.3, type: "Car Loan", valid: new Date(), gender: 'Male', category: "Loans" },
    { discount: 1.2, type: "International Card", valid: new Date(), gender: 'Female', category: "Cards" },
    { discount: 0.8, type: "Domestic Card", valid: new Date(), gender: 'Male', category: "Cards" }
  ];
  constructor() { }

  getOffers(_category?: String) {
    if (_category) {
      return this.offers.filter(offer => offer.category === _category);
    }
    return this.offers;
  }
}
