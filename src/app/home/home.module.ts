import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { SinglcallComponent } from "../singlcall/singlcall.component";
import { JitmeetComponent } from "../jitmeet/jitmeet.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, SinglcallComponent, JitmeetComponent],
  exports: [SinglcallComponent, JitmeetComponent],
})
export class HomePageModule {}
