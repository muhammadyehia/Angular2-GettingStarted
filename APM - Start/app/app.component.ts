import { Component } from 'angular2/core'
import  {ProductListComponent } from './products/product-list.component'
@Component({
    selector:'pm-app',
     template:`
     <div>
     <h1>{{PageTitle}}</h1>
     <pm-products> My First Component </pm-products>
     </div>
     `,
     directives:[ProductListComponent]
})
export class AppComponent{
    PageTitle:string="Product Managment";
}