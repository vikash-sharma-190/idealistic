import { AfterViewInit, Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  ngAfterViewInit() {
    document.getElementsByClassName("header")[0].remove();
  }
}
