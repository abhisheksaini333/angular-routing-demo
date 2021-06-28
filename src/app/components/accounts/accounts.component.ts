import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  showOffers() {
    const queryParams = {
      category: 'Accounts'
    }
    this._router.navigate(['/accounts/offers'], { queryParams });
  }

  downoadStatement() {
    this._router.navigate(['/accounts/download']);
  }

}
