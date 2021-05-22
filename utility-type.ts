interface Product{
id: number;
name: string;
price: number;
brand: string;
stock: number;
}

  function fetchProducts(): Promise<Product[]>{
  
  }
  
  type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
  function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){
  
  }
