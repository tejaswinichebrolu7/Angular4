import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  items : MenuItem[];
  veg : boolean = false;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.veg = true;
     this.items = [
            {label: 'BreakFast', icon: 'fa-smile-o',url:'/breakfast' },
            {label: 'Lunch', icon: 'fa-smile-o',url:'/lunch' },
            {label: 'Dinner', icon: 'fa-smile-o',url:'/dinner' }
        ];
  }

  addItems(){
    this.notifyParent.emit();
  }

}
