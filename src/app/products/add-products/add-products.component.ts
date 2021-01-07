import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: { value: { product_category: any; 
    product_name: any; product_description: any;
     product_rating: any; product_price: any;
      product_color: any; }; }){
    console.log(form.value);

    let newProduct = {
        id: 11,
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: 1,
        color: form.value.product_color,
        reviews: form.value.product_category,
    };

    console.log(newProduct);

    this.service.addProduct(newProduct).subscribe(data => {
      console.log(data);
    });

  }
}

