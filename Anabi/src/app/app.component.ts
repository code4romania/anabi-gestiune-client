import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Categorie } from './categorie.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    categorii: Categorie[] = [];
    ngOnInit() {
        this._httpService.get('http://localhost:63754/api/categorii').subscribe(values => {
            this.categorii = values.json() as Categorie[];
        });
    }
}
