import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

numero:number = 0;
numero2:number=0;


sumar(){
  this.numero2 +=1;
}
restar(){
  this.numero2 -=1;
}

constructor(){}
ngOnInit(): void {
  
}

}
