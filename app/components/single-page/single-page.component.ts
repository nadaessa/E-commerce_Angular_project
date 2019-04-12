import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  private product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
		private productService: ProductService 
		) { }

  ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) 
      {
        this.product = this.productService.find(id);
       }
		});
  }
}
