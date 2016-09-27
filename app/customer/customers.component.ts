import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
        {id:1, name:'Gabriel'},
        {id:2, name:'Sally'},
        {id:3, name:'Ton'},
        {id:4, name:'Dadepo'}
    ];
    constructor() { }

    ngOnInit() { }
}