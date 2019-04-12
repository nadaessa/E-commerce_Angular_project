import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService) { }

  
  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
