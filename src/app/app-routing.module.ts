import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserPageComponent } from '@app/index'
import { LoginComponent } from './user-page/login/login.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'user',
  component: UserPageComponent,
  children: [{
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
