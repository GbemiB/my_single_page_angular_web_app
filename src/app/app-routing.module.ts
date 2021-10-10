import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './WelcomePage/about/about.component';
import { ClientsComponent } from './WelcomePage/clients/clients.component';
// import { EditmyprofileComponent } from './Customer/editmyprofile/editmyprofile.component';
// import { OnboardingComponent } from './Customer/onboarding/onboarding.component';
import { SigninComponent } from './WelcomePage/signin/signin.component';
import { SignupComponent } from './WelcomePage/signup/signup.component';
// import { WalletComponent } from './Customer/dash-board/wallet/wallet.component';
import { OurSolutionComponent } from './WelcomePage/our-solution/our-solution.component';

const routes: Routes = [

     { path: 'signin', component: SigninComponent },
     { path: 'signup', component: SignupComponent },
     { path: 'about', component: AboutComponent },
     { path: 'clients', component: ClientsComponent },
     { path: 'oursolution', component: OurSolutionComponent },
    //  { path: 'dashboard', component: },

    //  { path: 'onboarding', component: OnboardingComponent },
    //  { path: 'editprofile', component: EditmyprofileComponent },
    //  { path: 'wallet', component: WalletComponent }
   
     // TODO firstweb page consist of signup, signin, about and client. After the customer is logged in then the customer can have access
     // to onboarding, editprofile, wallet, orders, signout

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
