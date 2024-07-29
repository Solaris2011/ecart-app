import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public name:string = "Jhon Doe3";
  product ={
    name  : "IPhone 13",
    price : 789,
    color : "Red",
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/germany.jpg'
  }

  public getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discount/100);
  }
}
