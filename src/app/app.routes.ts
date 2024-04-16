import { Routes } from '@angular/router';
import {HomeComponent} from "./components/base/home/home.component";
import {RegisterComponent} from "./components/base/auth/register/register.component";
import {DashboardComponent} from "./components/base/user/dashboard/dashboard.component";
import {LoginComponent} from "./components/base/auth/login/login.component";
import {TwofaComponent} from "./components/base/auth/twofa/twofa.component";
import {AboutComponent} from "./components/base/about/about.component";
import {DocumentsComponent} from "./components/base/user/documents/documents.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/2fa',
    component: TwofaComponent
  },
  {
    path: 'user',
    component: DashboardComponent
  },
  {
    path: 'user/documents',
    component: DocumentsComponent
  },
];

