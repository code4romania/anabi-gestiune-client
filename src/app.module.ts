import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

// design modules
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

// shared components
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';

// page components
import {HomeComponent} from './components/home/home.component';
import {AssetComponent} from './components/asset/asset.component';
import {DecisionComponent} from './components/decision/decision.component';
import {SearchComponent} from './components/search/search.component';
import {ReportsComponent} from './components/reports/reports.component';
import {DictionariesComponent} from './components/dictionaries/dictionaries.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddassetComponent} from './components/asset/addasset.component';
import {AppComponent} from './app.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'decision', component: DecisionComponent},
  {path: 'asset/:id', component: AssetComponent},
  {path: 'addasset', component: AddassetComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'dictionaries', component: DictionariesComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [
    ToolbarComponent,
    AppComponent,
    HomeComponent,
    SearchComponent,
    AssetComponent,
    DecisionComponent,
    ReportsComponent,
    DictionariesComponent,
    AdminComponent,
    AddassetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
