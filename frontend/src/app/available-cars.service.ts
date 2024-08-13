import { Injectable } from '@angular/core';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvailableCarsService {
  getAvailableCars() {
    return of([
      {id:1, brand:'Maybach', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$500000",pictureUrl:"https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/05/2017-Vision-Mercedes-Maybach-6-Cabriolet-1.jpg"},
      {id:2, brand:'Mercedes-Benz S Class', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$90000",pictureUrl:"https://media.ed.edmunds-media.com/mercedes-benz/s-class/2023/oem/2023_mercedes-benz_s-class_sedan_s-580e-4matic_fq_oem_1_1280.jpg"},
      {id:3, brand:'Cybertruck', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$120000",pictureUrl:"https://www.teslarati.com/wp-content/uploads/2023/07/tesla-cybertruck-texas-elon-musk-scaled-e1688899667930.jpeg"},
      {id:4, brand:'Tesla Model S', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$50000",pictureUrl:"https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format"},
      {id:5, brand:'Rivian r1t', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$68000",pictureUrl:"https://cdn.motor1.com/images/mgl/bywgl/s3/rivian-r1t.jpg"},
      {id:6, brand:'BMW i8', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$340000",pictureUrl:"https://ocdn.eu/pulscms-transforms/1/e0ck9kpTURBXy9iMmVmZDMzMTIyODI3MDA5MThmOTY5NTA3MmFjOGFlZi5qcGeSlQM1AM0EA80CQZMFzQSwzQKk3gACoTABoTEA"},
      {id:7, brand:'Toyota Yaris', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$68000",pictureUrl:"https://bi.im-g.pl/im/ab/c7/1c/z30176683Q,Toyota-Yaris-Sedan.jpg"},
      {id:8, brand:'Picanto', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$7000",pictureUrl:"https://images.carexpert.com.au/app/uploads/2023/01/Kia-Picanto-GT_HERO-16x9-2.jpg"},
      {id:9, brand:'lamborghini urus', seats:4, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$670000",pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg/1200px-Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg"},
      {id:10, brand:'Bugatti Chiron', seats:2, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$980000",pictureUrl:"https://motormag.pl/wp-content/uploads/2022/03/9-6.jpg.webp"},
      {id:11, brand:'Mercedes-Benz Sprinter', seats:8, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$168000",pictureUrl:"https://blackcars.uk/media/cache/dc/32/dc326aa824246eb0d039d3c7c2a3b0fb.jpg"},
      {id:12, brand:'Red Bull RB18', seats:1, fuelType:'Pb', fuelConsumption:6.8, power:125,price:"$5800000",pictureUrl:"https://cdn-7.motorsport.com/images/mgl/6n9RnBeY/s8/red-bull-racing-rb18-1.jpg"},

    ])
}
constructor() { }
}
