import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './data';
import { IProduct } from './product';

@Injectable()
export class DataService {
    getData(): IProduct[] {
        return PRODUCTDATA;
    }

    getDataById(productid: number) {
        return PRODUCTDATA.find(r => r.id == productid);
    }
}
