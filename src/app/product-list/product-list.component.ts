import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // public name:string = "Jhon Doe3";
  public addToCart:number = 0;
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
  onChangedEvent(eventObject:any){
    // this.name = eventObject.text;
    console.log(eventObject)
    // this.name = eventObject.target.value;
  }

  incrimentCartValue(){
    if(this.addToCart < this.product.inStock)
      this.addToCart ++;
  }
  decrementCartValue(){
    if(this.addToCart != 0)
      this.addToCart --;
  }

}
