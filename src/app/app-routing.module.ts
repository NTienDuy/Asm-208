import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';


const routes: Routes = [
  {
    path:"", component: HomePageComponent, children:[
      { path:"product", component: ProductPageComponent},
      { path:"product/:id", component: ProductDetailComponent},
    ]
  },
  {
    path:"admin", children: [
      {path:"product", component: ProductListComponent},
      {path:"product/add", component: ProductAddComponent},
      {path:"product/:id/edit", component: ProductEditComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }