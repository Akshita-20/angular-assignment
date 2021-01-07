import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList: Product;
  constructor(private service: ServiceService,
    private router : Router) { }

  ngOnInit(): void {
    this.service.viewAllProduct().subscribe(data=> {
      this.productList = data;
    });
  }
  


}
