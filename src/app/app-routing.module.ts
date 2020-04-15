import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserPageComponent } from '@app/index'
import { LoginComponent } from './user-page/login/login.component';
import { SignupComponent } from './user-page/signup/signup.component'
import { UserComponent } from './user-page/user/user.component'
import { UserGuard } from './user.guard'
import { AboutComponent } from './about/about.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',

},
{
  path: "termsandcondition",
  component: TermsandconditionComponent
},
{
  path: "privacy-policy",
  component: PrivacyPolicyComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'user',
  component: UserPageComponent,
  children: [{
    path: '',
    component: UserComponent,
    canActivate: [UserGuard],
    pathMatch: 'full'

  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent,
    pathMatch: 'full'

  }

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
