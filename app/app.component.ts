import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    // [ ] means property biding - Component to Dom
    // ( ) means event binding - Dom to Component
    title = 'Customer App';
    name = 'Gabriel';
    color = 'green'; 
    
    changeColor() { 
        this.color = this.color === 'green' ? 'red' : 'green';
    }
}
