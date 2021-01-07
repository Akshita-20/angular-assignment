import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  productId = 0;

  constructor(private service : ServiceService,
    private activated : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activated.params.subscribe(data => {
      this.productId = data.id;

      this.service.deleteProduct(this.productId).subscribe(deleteProductdata => {{
        console.log('Deleted product');
      }})
    });
  }

}
