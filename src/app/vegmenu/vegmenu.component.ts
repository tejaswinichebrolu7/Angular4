import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

import { Cart } from '../models/cart';
import { BreakfastComponent } from '../breakfast/breakfast.component';

@Component({
  selector: 'app-vegmenu',
  templateUrl: './vegmenu.component.html',
  styleUrls: ['./vegmenu.component.css']
})
export class VegmenuComponent implements OnInit,AfterViewInit {

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
  cartItems: Cart[] = [];
  totalItemCost : any = 0;
  idlyCount : any = 0;
  pooriCount : any = 0;
  vadaCount : any = 0;
  dosaCount: any = 0;
  i : any =0;
  val : number;
  rate : boolean = false;
  rated : boolean = false;
  display = false;
  checkOut : boolean = true;
  selected:boolean = false;
  veg:boolean;

  @ViewChild(BreakfastComponent) breakfastComponent: BreakfastComponent;
  //cartSize : any = 0;

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
    ngAfterViewInit(){
        this.breakfastComponent.veg = true;
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
        this.totalItemCost = this.totalItemCost + Number.parseInt(event.itemCost);
        switch(event.itemName){
            case "Idly":
            this.idlyCount = this.idlyCount+1;
             if(this.idlyCount < 2 ){
                 this.cartItems.push({
                     itemName: event.itemName,
                      itemCost: event.itemCost
                    });
              }
            break;
            case "Poori":
            this.pooriCount = this.pooriCount+1;
             if(this.pooriCount < 2 ){
                 this.cartItems.push({
                    itemName: event.itemName,
                      itemCost: event.itemCost
                    });
              }
            break;
            case "Vada":
            this.vadaCount = this.vadaCount+1;
            if(this.vadaCount < 2 ){
                 this.cartItems.push({
                    itemName: event.itemName,
                      itemCost: event.itemCost
                    });
              }
            break;
            case "Dosa":
            this.dosaCount = this.dosaCount+1;
            if(this.dosaCount < 2 ){
                 this.cartItems.push({
                 itemName: event.itemName,
                 itemCost: event.itemCost
            });
              }
            break;
            default:
            break;
        }
       // this.cartSize = this.cartItems.length;
    }

    removeItemFromCart(itemName,itemCost){
        switch(itemName){
            case "Idly":
            this.idlyCount = this.idlyCount-1;
             this.cartValue = this.cartValue-1;
             this.totalItemCost = this.totalItemCost - Number.parseInt(itemCost);
            if(this.idlyCount == 0){
                for(this.i = 0; this.i < this.cartItems.length;this.i++){
                      if(this.cartItems[this.i].itemName == "Idly"){
                            this.cartItems.splice(this.i,1);
                      }    
                }
            } 
            break;

            case "Vada":
            this.vadaCount = this.vadaCount-1;
             this.cartValue = this.cartValue-1;
             this.totalItemCost = this.totalItemCost - Number.parseInt(itemCost);
            if(this.vadaCount == 0){
                for(this.i = 0; this.i < this.cartItems.length;this.i++){
                      if(this.cartItems[this.i].itemName == "Vada"){
                            this.cartItems.splice(this.i,1);
                      }    
                }
            } 
            break;

            case "Poori":
            this.pooriCount = this.pooriCount-1;
             this.cartValue = this.cartValue-1;
             this.totalItemCost = this.totalItemCost - Number.parseInt(itemCost);
            if(this.pooriCount == 0){
                for(this.i = 0; this.i < this.cartItems.length;this.i++){
                      if(this.cartItems[this.i].itemName == "Poori"){
                            this.cartItems.splice(this.i,1);
                      }    
                }
            } 
            break;

            case "Dosa":
            this.dosaCount = this.dosaCount-1;
             this.cartValue = this.cartValue-1;
             this.totalItemCost = this.totalItemCost - Number.parseInt(itemCost);
            if(this.dosaCount == 0){
                for(this.i = 0; this.i < this.cartItems.length;this.i++){
                      if(this.cartItems[this.i].itemName == "Dosa"){
                            this.cartItems.splice(this.i,1);
                      }    
                }
            } 
            break;

            default:
            break;
        }
    }

    addItemToCart(itemName,itemCost){
        switch(itemName){
            case "Idly":
             this.idlyCount = this.idlyCount+1;
             this.cartValue = this.cartValue+1;
             this.totalItemCost = this.totalItemCost + Number.parseInt(itemCost);
            break;
             case "Vada":
             this.vadaCount = this.vadaCount+1;
             this.cartValue = this.cartValue+1;
             this.totalItemCost = this.totalItemCost + Number.parseInt(itemCost);
            break;
             case "Poori":
             this.pooriCount = this.pooriCount+1;
             this.cartValue = this.cartValue+1;
             this.totalItemCost = this.totalItemCost + Number.parseInt(itemCost);
            break;
             case "Dosa":
             this.dosaCount = this.dosaCount+1;
             this.cartValue = this.cartValue+1;
             this.totalItemCost = this.totalItemCost + Number.parseInt(itemCost);
            break;

            default:
            break;
        }
    }

    rateUs(){
        this.rate = true;
    }

    ratingSuccess(){
        this.rate = false;
        this.rated = true;
    }

    displayCartItems(){
        this.display = true;
    }

    checkOutItems(){
        this.checkOut = false;
    }

    displayItems(){
        console.log("came to parent");
        this.checkOut = true;
    }
}
