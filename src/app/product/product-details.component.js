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
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._DataService.getDataById(this.productid);
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