import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

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

  /*items: MenuItem[];*/
  items: SelectItem[];
  activeItem: MenuItem;
  cartValue : any = 0;
  breakfast : boolean = false;
  lunch : boolean = false;
  dinner : boolean = false;

    ngOnInit() {
        /*this.items = [
            {label: 'BreakFast', icon: 'fa fa-coffee' },
            {label: 'Lunch', icon: 'fa fa-thermometer-full',url:'/vegmenu/lunch' },
            {label: 'Dinner', icon: 'fa fa-glass',url:'/vegmenu/dinner' }
        ];*/
        this.items = [
            {label: 'BreakFast', value:"BreakFast" },
            {label: 'Lunch', value:"Lunch" },
            {label: 'Dinner' , value:"Dinner"}
        ];
    }
    tabChange(value:any){
        this.breakfast = false;
        this.lunch = false;
        this.dinner = false;
          switch(value){
           case "BreakFast" : this.breakfast = true;
           break;
           case "Lunch" : this.lunch = true;
           break;
           case "Dinner" : this.dinner = true;
           break;
           default:
           break;
       }  
    }
    getNotification(event:any){
        this.cartValue = this.cartValue+1;
    }
}
