import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from './app/material/material.module';

import {HomeComponent} from './components/home/home.component';
import {AssetComponent} from './components/asset/asset.component';
import {DecisionComponent} from './components/decision/decision.component';
import {SearchComponent} from './components/search/search.component';
import {ReportsComponent} from './components/reports/reports.component';
import {DictionariesComponent} from './components/dictionaries/dictionaries.component';
import {AdminComponent} from './components/admin/admin.component';
import { AddassetComponent } from './components/asset/addasset.component';
import {AnabiEntityModule} from './components/entities/entity.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {storageSpacesRoute} from './components/entities/storage-spaces-anabi';

const ROUTES: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'decision', component: DecisionComponent},
  {path: 'asset/:id', component: AssetComponent},
  {path: 'addasset', component: AddassetComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'dictionaries', component: DictionariesComponent},
  {path: 'admin', component: AdminComponent},
  ...storageSpacesRoute,
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AnabiEntityModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    AssetComponent,
    DecisionComponent,
    ReportsComponent,
    DictionariesComponent,
    AdminComponent,
    AddassetComponent
  ],
  providers: [
  ],
  bootstrap: [HomeComponent]
})

export class AppModule {
}
