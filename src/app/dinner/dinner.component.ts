import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  items : MenuItem[];

  constructor() { }

  ngOnInit() {
     this.items = [
            {label: 'BreakFast', icon: 'fa-smile-o',url:'/breakfast' },
            {label: 'Lunch', icon: 'fa-smile-o',url:'/lunch' },
            {label: 'Dinner', icon: 'fa-smile-o',url:'/dinner' }
        ];
  }

}
