import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3-lain',
  templateUrl: './tugas3-lain.component.html',
  styleUrls: ['./tugas3-lain.component.css']
})
export class Tugas3LainComponent implements OnInit {
  arrData = [];
  serverName: any;
  arrDataCount = 0;
  showData: boolean;
  dataAdd: boolean;
  serverStatus: any = 'offline';

  constructor() {
    this.showData = false;
    this.dataAdd = false;
  }

  ngOnInit() {}

  addServerName(inputName: HTMLInputElement) {
    this.serverName = inputName.value;
  }

  addLogServer() {
    this.arrDataCount = this.arrData.length + 1;
    this.showData = false;
    this.dataAdd = true;
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    
    this.arrData.push({
      name: this.serverName, 
      status: this.serverStatus 
    });
  }

  showLogServer() {
    this.showData = true;
    this.dataAdd = false;
  }

}
