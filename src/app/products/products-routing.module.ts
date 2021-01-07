import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'delete/:id', component: DeleteProductsComponent },
  { path: 'product/:id', component: ViewAllProductsComponent },
  { path: 'update/:id', component: UpdateProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
