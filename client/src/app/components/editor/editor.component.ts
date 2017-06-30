import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  //template: ``
  templateUrl:'./editor.component.html'
})
export class EditorComponent{
ckeditorContent = `<b>saibaba</b>`;
arr:number[]=[1,2,3];
  constructor(){
  
  }
}