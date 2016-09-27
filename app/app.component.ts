import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    // [ ] means property biding - Component to Dom
    // ( ) means event binding - Dom to C

    title = 'Customer App';
    name = 'Gabriel';
    color = 'green'; 
    customers = [
        {id: 1, name: 'Gabriel'},
        {id: 2, name: 'Nancy'},
        {id: 3, name: 'Emmer'},
        {id: 4, name: 'Sally'}
    ];
    changeColor() { 
        this.color = this.color === 'green' ? 'red' : 'green';
    }
}
