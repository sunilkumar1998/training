import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatExpansionModule} from '@angular/material/expansion';
import { MyErrorhandlerService } from './my-errorhandler.service';



@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    StructuredirectiveComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
