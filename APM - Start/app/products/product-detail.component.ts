import {Component,Input } from 'angular2/core'
declare var __modulename:string
@Component({
    selector:'pm-detail',
    templateUrl:'product-detail.component.html',
    moduleId:__modulename
})
export class ProductDetail {
   @Input() pageTitle:string
}