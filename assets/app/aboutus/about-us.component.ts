import { Component } from "@angular/core";

@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],

})
export class aboutUs {
    fullImagePath: string;
    constructor() {
        this.fullImagePath = '/assets/images/kunlaya.png'
    }
    ngOnInit() {
    }

}