import { Component } from '@angular/core';

@Component({
  selector: 'app-studententry',
  templateUrl: './studententry.component.html',
  styleUrls: ['./studententry.component.css']
})
export class StudententryComponent {
 name=""
 roll=""
 adnum=""
 phnno=""
 clg=""
 pname=""
 pmobile=""
 username=""
 pass=""

 readValues=()=>
  {
    let data:any={"name":this.name,"roll":this.roll,"adnum":this.adnum,"phnno":this.phnno,"pname":this.pname,"pmobile":this.pmobile,"username":this.username,"password":this.pass}
    console.log(data)
  }


}
