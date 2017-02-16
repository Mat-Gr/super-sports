"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../shared/product-data/data.service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_route, _router, _DataService) {
        this._route = _route;
        this._router = _router;
        this._DataService = _DataService;
        this.option = [];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._DataService.getDataById(this.productid);
        // define heroimg
        this.heroimg = this.product.heroimg;
        // If there is an old price -> calculate percent you save
        if (this.product.oldprice) {
            this.percentage = ((this.product.oldprice - this.product.price) / this.product.oldprice) * 100;
        }
        // Combine colors and sizes
        for (var _i = 0, _a = this.product.options; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, _c = item.sizes; _b < _c.length; _b++) {
                var size = _c[_b];
                this.option.push(item.color + " " + size);
            }
        }
    };
    // change gallery image on click
    ProductDetailsComponent.prototype.gallery = function (image) {
        this.heroimg = image.src;
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/product/product-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map