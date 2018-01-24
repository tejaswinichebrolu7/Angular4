import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  @Output() notifyParentToModifyCartData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  modifyCartData(event : any){
    this.notifyParentToModifyCartData.emit();
    console.log("emitting");
  }
}
