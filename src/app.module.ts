import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

// design modules
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

// shared components
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';

// core module
import { CoreModule } from './core/core.module';

// page components
import {HomeComponent} from './components/home/home.component';
import {AssetComponent} from './components/asset/asset.component';
import {DecisionComponent} from './components/decision/decision.component';
import {SearchComponent} from './components/search/search.component';
import {ReportsComponent} from './components/reports/reports.component';
import {DictionariesComponent} from './components/dictionaries/dictionaries.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddassetComponent} from './components/asset/addasset.component';
import {AssetsListComponent} from './components/assets/assets-list.component';
import {AssetsAddComponent} from './components/assets/assets-add.component';
import {AppComponent} from './app.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'assets', component: AssetsListComponent},
  {path: 'dictionaries', component: DictionariesComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: '/home'}
  // {path: 'decision', component: DecisionComponent},
  // {path: 'asset/:id', component: AssetComponent},
  // {path: 'addasset', component: AddassetComponent},
  // {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FlexLayoutModule,
    MaterialModule,
    CoreModule,
  ],
  declarations: [
    ToolbarComponent,
    AppComponent,
    HomeComponent,
    AssetsListComponent,
    AssetsAddComponent,
    SearchComponent,
    AssetComponent,
    DecisionComponent,
    ReportsComponent,
    DictionariesComponent,
    AdminComponent,
    AddassetComponent
  ],
  entryComponents: [
    AssetsAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
