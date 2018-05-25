import { NgModule } from '@angular/core';

// modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class SharedModule {}
