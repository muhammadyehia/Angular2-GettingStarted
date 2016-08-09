import {Component,OnChanges,Input ,Output ,EventEmitter } from 'angular2/core'
declare var __moduleName:string;
@Component({
    selector:'ai-star',
    moduleId:__moduleName,
    templateUrl:'star.component.html',
    styleUrls:['star.component.css']
})
export  class StarComponent implements OnChanges
{
starWidth:number;
@Input() rating:number;
ngOnChanges():void
{
  this.starWidth=this.rating*86/5;  
}
 @Output()  ratingClicked:EventEmitter<string>=new EventEmitter<string>();
 onClick(){
     this.ratingClicked.emit(`The Rating ${this.rating} was clicked`);
 }
}