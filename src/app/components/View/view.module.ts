import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialcomponentModule } from 'src/app/materialcomponent/materialcomponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestComponent } from '../latest/latest.component';


@NgModule({
  declarations: [
    HomeComponent,
    LatestComponent,
  ],
  imports: [
    CommonModule,
    MaterialcomponentModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class ViewModule {}
