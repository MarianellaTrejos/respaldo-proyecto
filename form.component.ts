import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { formModel} from 'src/app/model/fillForm.model';
import { fillformService } from 'src/app/service/fillForm.service';

import { FormControl } from '@angular/forms';


/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})

export class formComponent implements OnInit {
  showMe:boolean = false
  //disableSelect = new FormControl(false);
 // listbranch: formModel[]=[];
 // form:formModel[]=[];
 constructor(private router: Router, private _route: ActivatedRoute, private ApplyBulletin:fillformService) { 
  //this._route.params.subscribe( (params: Params) =>
  //  this.bulletinId = params['bulletinId']
 }

  
 ngOnInit(): void {

}

ventana(){
  alert("Fomulario enviado satisfactoriamente");
}

toggleTag(){
  this.showMe=!this.showMe
}

back():void{
  this.router.navigate(['cartel'])
}


     
  }
  