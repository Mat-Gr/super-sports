import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IProduct } from "../shared/product-data/product";
import { DataService } from "../shared/product-data/data.service";

@Component({
    templateUrl: 'app/product/product-details.component.html'
})

export class ProductDetailsComponent {
    productid: number;
    product: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _DataService: DataService) {

    }

    ngOnInit() {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._DataService.getDataById(this.productid);
    }
}
