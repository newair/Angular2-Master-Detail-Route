import { MDRoutingModule } from './md-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDListComponent } from './mdlist/mdlist.component';
import { MDDetailComponent } from './mddetail/mddetail.component';

@NgModule({
  imports: [
    CommonModule,
    MDRoutingModule
  ],
  declarations: [MDListComponent, MDDetailComponent]
})
export class MasterDetailModule { }
