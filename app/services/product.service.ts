import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];
  constructor() { 
    this.products = [
      {
        "id": "HT-1000",
        "description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "name": "Notebook Basic 15",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
        "status": "Available",
        "quantity": 10,
        "price": 956,
      },
      {
        "id": "HT-1001",
        "description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "name": "Notebook Basic 17",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
        "status": "Available",
        "quantity": 20,
        "price": 1249,
      },
      {
        "id": "HT-1002",
        "description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "name": "Notebook Basic 18",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
        "status": "Available",
        "quantity": 10,
        "price": 1570,
      },
      {
        "id": "HT-1003",
        "description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "name": "Notebook Basic 19",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
        "status": "Available",
        "quantity": 15,
        "price": 2070,
      },
      {
        "id": "HT-1007",
        "description": "Digital Organizer with State-of-the-Art Storage Encryption",
        "name": "Notebook Basic 19",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
        "status": "Available",
        "quantity": 15,
        "price": 2000,
      },
      {
        "id": "HT-1010",
        "description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
        "name": "Notebook Professional 15",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
        "status": "Available",
        "quantity": 15,
        "price": 2000,
      },
      {
        "id": "HT-1011",
        "description": "Digital Organizer with State-of-the-Art Storage Encryption",
        "name": "Notebook Basic 19",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1011.jpg",
        "status": "Available",
        "quantity": 15,
        "price": 2500,
      },
      {
        "id": "HT-1020",
        "description": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
        "name": "ITelO Vault Net",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1020.jpg",
        "status": "Available",
        "quantity": 15,
        "price": 2000,
      },
      {
        "id": "HT-1021",
        "description": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
        "name": "ITelO Vault SAT",
        "photo": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1021.jpg",
        "status": "Available",
        "quantity": 25,
        "price": 3000,
      },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }

}
