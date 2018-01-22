import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-vegmenu',
  templateUrl: './vegmenu.component.html',
  styleUrls: ['./vegmenu.component.css']
})
export class VegmenuComponent implements OnInit {

 constructor(
        private route: ActivatedRoute,
        private router: Router
    ){};

  items: MenuItem[];
  activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'BreakFast', icon: 'fa-smile-o',url:'/breakfast' },
            {label: 'Lunch', icon: 'fa-smile-o',url:'/lunch' },
            {label: 'Dinner', icon: 'fa-smile-o',url:'/dinner' }
        ];
    }
}
