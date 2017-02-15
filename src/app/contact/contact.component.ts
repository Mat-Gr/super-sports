import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

class ContactData {
    contactname: string;
    contactemail: string;
    message: string;
}

@Component ({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent implements OnInit {
    model: ContactData = new ContactData();
    hasBeenSubmitted: boolean;

    ngOnInit() {
        this.hasBeenSubmitted = false;
    }

    contact(form: NgForm, event: Event) {
        event.preventDefault();
        this.hasBeenSubmitted = true;
    }
}
