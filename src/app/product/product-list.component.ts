import { Component, OnInit } from "@angular/core";
import { IProduct } from "../shared/product-data/product";
import { DataService } from "../shared/product-data/data.service";

@Component({
    selector: 'product-list',
    templateUrl: 'app/product/product-list.component.html'
})

export class ProductListComponent implements OnInit {
    products:IProduct[];

    constructor(private DataService: DataService){
    }

    ngOnInit(){
        this.products = this.DataService.getData();
    }
}
