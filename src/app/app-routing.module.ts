import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserPageComponent } from '@app/index'


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'user',
  component: UserPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
