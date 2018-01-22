import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  
  images: any[];
  items: MenuItem[];
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){};
    ngOnInit() {
        this.images = [];
        this.images.push({source:'../../assets/images/veg.jpg', alt:'All veg items including desserts and beverages', title:'Vegeterian Foods',});
        this.images.push({source:'../../assets/images/nonVeg.jpg', alt:'All Non-veg items including desserts and beverages', title:'Non Vegeterian Foods'});

        this.items = [
           {
                label: 'Veg',
                icon: 'fa fa-circle',
                url:'/vegmenu'
            },
            {
                label: 'Non-Veg',
                icon: 'fa fa-circle',
                url:'/non-vegmenu'
            }
        ];    
  
}
}
