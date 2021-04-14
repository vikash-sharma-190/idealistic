import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  allChannelStatus: EventEmitter<any> = new EventEmitter<any>();
  statusEnable: boolean;

  constructor() { }
  ngOnInit(): void {
  }
  allchannel(){
    this.statusEnable=true;
   return this.allChannelStatus.emit(true);
  }
  setHome(){
    this.statusEnable=false;
    return this.allChannelStatus.emit(false);
  }
}
