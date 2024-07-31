import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

//Criando a roda do Login
export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    }
];
