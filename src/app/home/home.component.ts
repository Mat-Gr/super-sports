import { Component, AfterViewInit } from '@angular/core';

@Component ({
    selector: 'home',
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements AfterViewInit {
    ngAfterViewInit() {
        jQuery('.carousel').carousel({
            interval: 5000,
            pause: "false"
        });
    }
}
