import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
const appRoutes: Routes = [
  { path: 'menu1', component: MainComponent },
  { path: '', redirectTo: '/menu1', pathMatch: 'full' },
    { path: '**', component: DefaultComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}