import { NgModule } from "@angular/core"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { LoginComponent } from "./login.component"
import { LoginRouteModule } from "./login.route"
import { MaterialModule } from './../../shared/material.module';


@NgModule({
    imports: [LoginRouteModule, FormsModule,MaterialModule], //SIN FORMS DA ERROR NG
    declarations: [LoginComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]   
})
export class LoginModule {}