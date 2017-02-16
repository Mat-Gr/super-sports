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
    percentage: number;
    option: Array<string> = [];
    heroimg: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _DataService: DataService) {

    }

    ngOnInit() {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._DataService.getDataById(this.productid);
        // define heroimg
        this.heroimg = this.product.heroimg;

        // If there is an old price -> calculate percent you save
        if(this.product.oldprice) {
            this.percentage = ((this.product.oldprice - this.product.price) / this.product.oldprice) * 100;
        }

        // Combine colors and sizes
        for(let item of this.product.options) {
            for(let size of item.sizes) {
                this.option.push(item.color + " " + size);
            }
        }
    }

    // change gallery image on click
    gallery(image: any) {
        this.heroimg = image.src;
    }
}
