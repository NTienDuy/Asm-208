import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductaddComponent } from './pages/admin/productadd/productadd.component';
import { ProducteditComponent } from './pages/admin/productedit/productedit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent , children: [
      { path: "product", component: ProductpageComponent },
      { path: "product/:id", component: ProductdetailComponent }
    ]
  },
  {
    path: "admin", component: DashboardComponent, children: [
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: ProductaddComponent },
      { path: "product/:id/edit", component: ProducteditComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }