import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

import { UnicornsUpdateComponent } from "../unicorns-update.component"
import { UnicornsViewComponent } from "../unicorns-view.component"
import { UnicornsComponent } from "./unicorns.component"
import { UnicornsRouteModule } from "./unicorns.route"


@NgModule({ 
    imports: [
    CommonModule,
    FormsModule,
    
 
    
],
    declarations: [
        UnicornsComponent,
        UnicornsViewComponent,
        UnicornsUpdateComponent],
    providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [UnicornsViewComponent,UnicornsUpdateComponent],   
})
export class UnicornsModule {}