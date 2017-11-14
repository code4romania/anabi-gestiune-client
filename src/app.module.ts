import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {HomeComponent} from './components/home/home.component';
import {AssetComponent} from './components/asset/asset.component';
import {DecisionComponent} from './components/decision/decision.component';
import {SearchComponent} from './components/search/search.component';
import {ReportsComponent} from './components/reports/reports.component';
import {DictionariesComponent} from './components/dictionaries/dictionaries.component';
import {AdminComponent} from './components/admin/admin.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'decision', component: DecisionComponent},
  {path: 'asset/:id', component: AssetComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'dictionaries', component: DictionariesComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    AssetComponent,
    DecisionComponent,
    ReportsComponent,
    DictionariesComponent,
    AdminComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [HomeComponent]
})

export class AppModule {
}
