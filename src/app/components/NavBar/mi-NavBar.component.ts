import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'mi-componente',
    template: `
    <h1> TOORING PAGE </h1>
    `
})

// tslint:disable-next-line:component-class-suffix
export class MiComponente{
    constructor(){
        console.log('componente cargado');
    }
}
