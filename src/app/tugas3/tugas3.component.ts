import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  secretWord = 'Tuban bumi wali';
  showSecret = false;
  arrData = [];

  jumlah = this.arrData.length;
  onClick(){
    this.showSecret = true;
    this.arrData.push(this.secretWord);
  }

  getColor(){
    return this.arrData.length > 5 ? 'white' : 'black';
  }

  jumlahData(){
    return this.jumlah;
  }
  constructor() { }

  ngOnInit() {
  }

}
