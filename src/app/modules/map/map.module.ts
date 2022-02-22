import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    MapRoutingModule
  ]
})
export class MapModule { }