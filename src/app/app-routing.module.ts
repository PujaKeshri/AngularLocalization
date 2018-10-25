import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  { path : 'profile' , component : ProfileComponent },
  { path : 'dashboard' , component : DashboardComponent }
];

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}