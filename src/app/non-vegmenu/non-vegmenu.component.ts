import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-non-vegmenu',
  templateUrl: './non-vegmenu.component.html',
  styleUrls: ['./non-vegmenu.component.css']
})
export class NonVegmenuComponent implements OnInit {

  items:MenuItem[];
  constructor(
        private route: ActivatedRoute,
        private router: Router
    ){};

  ngOnInit() {
     //this.router.navigate(['/breakfast']);
    this.items = [
            {label: 'BreakFast', icon: 'fa fa-coffee',url:'/non-vegmenu/breakfast' },
            {label: 'Lunch', icon: 'fa fa-thermometer-full',url:'/non-vegmenu/lunch' },
            {label: 'Dinner', icon: 'fa fa-glass',url:'/non-vegmenu/dinner' }
        ];
  }

}
