import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'mi-componente',
    template: `
    <div style="margin-left: 3%; margin-top:10px;"><img src="http://itooring.com/images/Seccion1/LOGO.png"  width="140" height="28"></div>
    `
})

// tslint:disable-next-line:component-class-suffix
export class MiComponente{
    constructor(){
        console.log('componente cargado');
    }
}
