import { Component, OnInit} from 'angular2/core'
import { IProduct} from './product'
import { ProductFilterPipe} from './product-filter.pipe'
import {StarComponent} from '../shared/star.component'
import {ProductService} from './product.service'
declare var __moduleName: string;
@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    moduleId: __moduleName,
    styleUrls: ['product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]

})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {
    
    }
    errorMessage:string;
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    products: IProduct[];
    tooggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
           this._productService.getProducts().subscribe(Products=> this.products=Products, error=>this.errorMessage=<any>error );
    }
    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}