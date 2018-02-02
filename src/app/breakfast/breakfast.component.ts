import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input} from '@angular/core';

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
  @Input() veg:boolean =  false;;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  @Input() itemType: String = "";

  constructor() { }

  ngOnInit() {
    //this.veg= true;
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

  addItems(event:any,itemName:String,itemCost:String){
    /*this.count += 1;
    this.notifyParent.emit(this.count);*/
    //console.log(itemName+""+itemCost);
    event.itemName = itemName;
     event.itemCost = itemCost;
    this.notifyParent.emit(event);
  }

}
