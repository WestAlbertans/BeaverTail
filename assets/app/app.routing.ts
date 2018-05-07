import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/auth/signup.component";
import { SigninComponent } from "../app/auth/signin.component";

const APP_ROUTES: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);