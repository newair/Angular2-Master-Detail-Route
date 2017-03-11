import { MDDetailComponent } from './mddetail/mddetail.component';
import { MDListComponent } from './mdlist/mdlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const menu3Routes: Routes = [
  { path: 'menu3',  component: MDListComponent },
  { path: 'menu3/:id', component: MDDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(menu3Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MDRoutingModule { }
