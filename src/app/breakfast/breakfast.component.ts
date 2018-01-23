import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output} from '@angular/core';

import { MenuItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  items : MenuItem[];
  options : MenuItem[];
  veg:boolean=false;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.veg= true;
     this.items = [
            {label: 'BreakFast', icon: 'fa-smile-o',url:'/breakfast' },
            {label: 'Lunch', icon: 'fa-smile-o',url:'/lunch' },
            {label: 'Dinner', icon: 'fa-smile-o',url:'/dinner' }
        ];
      this.options = [
          {label: 'Add to cart'},
          {label: 'Save to wishlist'}
      ];
  }

  addItems(){
    /*this.count += 1;
    this.notifyParent.emit(this.count);*/
    this.notifyParent.emit();
  }

}
