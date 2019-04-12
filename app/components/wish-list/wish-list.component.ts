import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  private products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
		private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) 
      {
        var product: Product = this.productService.find(id);
        if (localStorage.getItem('wishlist') == null)
        {
					let wishlist: any = [];
					wishlist.push(JSON.stringify(product));
					localStorage.setItem('wishlist', JSON.stringify(wishlist));
				} else{
          let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
          wishlist.push(JSON.stringify(product));
					localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
				this.loadWishList();
			} else {
				this.loadWishList();
			}
		});
  }

  loadWishList(): void {
		this.products = [];
		let wishlist = JSON.parse(localStorage.getItem('wishlist'));
		for (var i = 0; i < wishlist.length; i++) {
			let product = JSON.parse(wishlist[i]);
			this.products.push( product );
		}
	}

	remove(id: string): void {
		let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
		for (var i = 0; i < wishlist.length; i++) {
			let product: Product = JSON.parse(wishlist[i]);
			if (product.id == id) {
				wishlist.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
		this.loadWishList();
	}

}
