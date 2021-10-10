import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './WelcomePage/about/about.component';
import { SigninComponent } from './WelcomePage/signin/signin.component';
import { SignupComponent } from './WelcomePage/signup/signup.component';
import { OurSolutionComponent } from './WelcomePage/our-solution/our-solution.component';
import { OnboardingComponent } from './Customer/onboarding/onboarding.component';
// import { EditmyprofileComponent } from './Customer/editmyprofile/editmyprofile.component';
import { ClientsComponent } from './WelcomePage/clients/clients.component';
import { CartComponent } from './Customer/dash-board/cart/cart.component';
import { WalletComponent } from './Customer/dash-board/wallet/wallet.component';
// import { MyordersComponent } from './Customer/myorders/myorders.component';
import { SignoutComponent } from './Customer/signout/signout.component';
import { DashBoardComponent } from './Customer/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    OurSolutionComponent,
    OnboardingComponent,
    // EditmyprofileComponent,
    ClientsComponent,
    CartComponent,
    WalletComponent,
    // MyordersComponent,
    SignoutComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
