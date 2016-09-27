import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Gabriel';
    color = 'green'; 

    // [ ] means property biding - Component to Dom
    // ( ) means event binding - Dom to C

    changeColor() { 
        this.color = this.color === 'blue' ? 'red' : 'blue';
    }
}
