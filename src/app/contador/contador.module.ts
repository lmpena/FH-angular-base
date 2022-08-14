import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        // CommonModule - sólo si usas directivas *ngIf, *ngFpr
    ]
})
export class ContadorModule {

}