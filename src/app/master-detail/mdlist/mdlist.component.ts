import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdlist',
  templateUrl: './mdlist.component.html',
  styleUrls: ['./mdlist.component.css']
})
export class MDListComponent implements OnInit {

  private items = [{id: 1 , name: 'item1'} , {id: 2, name: 'item2'}];
  private itemSelected: null;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSelect(item) {
    this.itemSelected = item;
    this.router.navigate(['/menu3', item.id]);
  }

}
