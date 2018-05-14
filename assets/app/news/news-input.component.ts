import { Component } from "@angular/core";
import {News} from './news.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";


<<<<<<< HEAD
import {Form} from './news.model';

=======
>>>>>>> 5266d7e9f5d6c0d5ecc0c1fec8261559da64c933
@Component({
    selector: 'app-form',
    templateUrl: './news-input.component.html',
    styleUrls:[
        './news-input.component.css'
    ]

})

export class FormComponent{
    // let form = new Form ( 'www.facebook.com.'
    // ,'So this is the example', 'Canada', 'Canadian, Social',
    // 'Canadian','News, Social, Facebook'
    // );

    latitudeForMap: number = 50
    longitudeForMap: number = -122
    latitude: number
    longitude: number
    zoom: number = 2

    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    
    autoCompleteCallback1(selectedData:any) {
        console.log(selectedData.response)
        if (selectedData.response) {
            this.latitudeForMap = selectedData.data.geometry.location.lat
            this.latitude = selectedData.data.geometry.location.lat
            this.longitudeForMap = selectedData.data.geometry.location.lng
            this.longitude = selectedData.data.geometry.location.lng
            this.zoom = 10
            console.log(this.latitude + ", " + this.longitude)
        }
    }

    mapClicked($event: any) {
        this.latitude = $event.coords.lat
        this.longitude = $event.coords.lng
        console.log(this.latitude + ", " + this.longitude)
    }

    pinDragged($event: any) {
        this.latitude = $event.coords.lat
        this.longitude = $event.coords.lng
        console.log(this.latitude + ", " + this.longitude)
    }
}

interface Marker {
    name?: string,
    lat: Number,
    lng: Number,
}