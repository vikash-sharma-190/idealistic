import { ApiCallService } from './api-call.service';
import { AfterViewInit, Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit , OnInit{
  constructor(private apicall:ApiCallService){

  }
  name = "Angular " + VERSION.major;
  homeStatus:boolean=true;
  allChannel:boolean=false;
  ngOnInit(){
this.apicall.getscore().subscribe(res=>{
  console.log(res);
})
this.apicall.getcurrent().subscribe(res=>{
  console.log("xml value",res);
})
  }
  ChannelStatus(event) {
    if (event) {
      this.allChannel = true;
      this.homeStatus=false;
    }
    else {
      this.homeStatus = true;
      this.allChannel = false;

    }
  }
  ngAfterViewInit() {
    document.getElementsByClassName("header")[0].remove();
  }
}
