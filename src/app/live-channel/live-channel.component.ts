import { LiveStreamService } from './live-stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-channel',
  templateUrl: './live-channel.component.html',
  styleUrls: ['./live-channel.component.css']
})
export class LiveChannelComponent {

  constructor(private http_api:LiveStreamService) { }
channelList:any;
  ngOnInit(): void {
// this.http_api.getAllChannelData().subscribe(res=>{
// this.channelList=[];
// this.channelList=JSON.parse(JSON.stringify(res));
// })
}

}
