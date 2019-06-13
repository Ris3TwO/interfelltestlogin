import { Component, OnInit } from '@angular/core';
import { DepFlags } from '@angular/compiler/src/core';
import { DataService } from 'src/app/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  datos;
  BOOKING_DATA: any;
  DATA:any; 
  constructor(private api: DataService)
  {
    this.api.datos().subscribe(response=>{
      this.DATA =response;
      console.log(this.DATA)
      this.DATA.forEach(element => {
        this.datos= [{
          id: element.bookingId,
          name: `${element.tutenUserClient.firstName}  ${element.tutenUserClient.lastName}`,
          bookingTime: element.bookingTime,
          direction: element.locationId.streetAddress,
          price: element.bookingPrice

        }]
      });
        console.log(this.datos)
        this.dataSource = this.datos;
    })
  }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'name', 'date', 'address','price'];
  dataSource = null;
}
