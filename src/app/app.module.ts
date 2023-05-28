import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { AdminproductComponent } from './pages/admin/adminproduct/adminproduct.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductaddComponent } from './pages/admin/productadd/productadd.component';
import { ProducteditComponent } from './pages/admin/productedit/productedit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomepageComponent,
    ProductpageComponent,
    ProductdetailComponent,
    AdminproductComponent,
    DashboardComponent,
    ProductaddComponent,
    ProducteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
