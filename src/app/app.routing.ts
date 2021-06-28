// - import some functionalities from angular's core library
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// - import some components
import { AccountsComponent } from "./components/accounts/accounts.component";
import { CardsComponent } from "./components/cards/cards.component";
import { LoansComponent } from "./components/loans/loans.component";
import { OffersComponent } from "./components/offers/offers.component";
import { DownloadComponent } from "./components/download/download.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";

import { AuthGuardService } from "./helper/auth-guard.service";

// - create the mapping of these components with the "routes"
const approutes: Routes = [
    {
        path: '', // http://localhost:4200/accounts
        component: AccountsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'accounts', // http://localhost:4200/accounts
        component: AccountsComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'offers', // http://localhost:4200/accounts/offers
                component: OffersComponent
            },
            {
                path: 'download', // http://localhost:4200/accounts/download
                component: DownloadComponent
            }
        ]
    },
    {
        path: 'loans',
        component: LoansComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'offers', // http://localhost:4200/loans/offers
                component: OffersComponent
            },
            {
                path: 'download', // http://localhost:4200/loans/download
                component: DownloadComponent
            }
        ]
    },
    {
        path: 'cards',
        component: CardsComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'offers', // http://localhost:4200/cards/offers
                component: OffersComponent
            },
            {
                path: 'download', // http://localhost:4200/cards/download
                component: DownloadComponent
            }
        ]
    },
    {
        path: 'offers',
        canActivate: [AuthGuardService],
        component: OffersComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
        //redirectTo: 'login'
    }
]

// - export this mapping
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(approutes);