import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [
  {
    path: '',
    component: UserprofileComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
