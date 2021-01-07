import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, AddProductsComponent, DeleteProductsComponent, 
    UpdateProductsComponent, ViewAllProductsComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
