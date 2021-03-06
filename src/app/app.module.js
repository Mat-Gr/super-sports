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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var site_header_component_1 = require('./shared/site-header/site-header.component');
var site_footer_component_1 = require('./shared/site-footer/site-footer.component');
var home_component_1 = require('./home/home.component');
var product_list_component_1 = require('./product/product-list.component');
var product_details_component_1 = require('./product/product-details.component');
var contact_component_1 = require('./contact/contact.component');
var data_service_1 = require('./shared/product-data/data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'product/:id', component: product_details_component_1.ProductDetailsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, site_header_component_1.SiteHeaderComponent, site_footer_component_1.SiteFooterComponent, home_component_1.HomeComponent, product_list_component_1.ProductListComponent, product_details_component_1.ProductDetailsComponent, contact_component_1.ContactComponent],
            providers: [data_service_1.DataService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map