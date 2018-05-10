import { Component, OnInit} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    
    username: String
    constructor(private authService: AuthService, private router: Router) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout()
        this.router.navigateByUrl('/')
    }

    ngOnInit() {
        if (this.isLoggedIn()) {         
            this.username = localStorage.getItem('username')
        }
    }

}