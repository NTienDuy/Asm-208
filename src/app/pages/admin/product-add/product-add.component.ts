import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(5) ] ],
    price:[0],
    img: ['']
  })
      constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {

  }
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || '',
    }
    this.productService.addProduct(product).subscribe(data => {
      this.router.navigate(['/admin/product']);
    })
  }

}
