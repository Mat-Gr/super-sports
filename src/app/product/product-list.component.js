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
var data_service_1 = require("../shared/product-data/data.service");
var ProductListComponent = (function () {
    function ProductListComponent(DataService) {
        this.DataService = DataService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.DataService.getData();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/product/product-list.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map