import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    MenuComponent,
    CuerpoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CuerpoComponent,
    MenuComponent
  ]

})
export class NavarModule { }
