import { Component, OnInit } from '@angular/core';
import { DepFlags } from '@angular/compiler/src/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit
{
  datos;
  BOOKING_DATA = [];
  DATA: any;
  constructor(private api: DataService)
  {
    console.log(this.BOOKING_DATA)
    this.api.datos().subscribe(response =>
    {
      this.DATA =response;
      console.log(this.DATA)
      this.DATA.forEach(element =>
      {
        let datos =
        {
          id: element.bookingId,
          name: `${element.tutenUserClient.firstName}  ${element.tutenUserClient.lastName}`,
          bookingTime: element.bookingTime,
          direction: element.locationId.streetAddress,
          price: element.bookingPrice
        }
        this.BOOKING_DATA.push(datos)
      });
        console.log(this.BOOKING_DATA)
        this.dataSource = this.BOOKING_DATA;
    })
  }

  ngOnInit()
  {
  }

  displayedColumns: string[] = ['id', 'name', 'date', 'address', 'price'];
  dataSource = null
}
