import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/products/service.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.service.getcategory().subscribe(data => {
      this.categoryList = data;
    });

  }
  edit(){
  }
  delete(){
    
  }

}

