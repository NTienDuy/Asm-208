import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Validators, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {
productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) {

  }
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }
    this.productService.addProduct(product).subscribe(data => {
      console.log(data);
    })
  }
}
