import { Component, OnInit, } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 product : Product;
  constructor(
    private productServices : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
    this.route.params.subscribe(param => {
      
      this.productServices.getProduct(param.id).subscribe(data => {
        this.product = data;
      })
    });
  }
}