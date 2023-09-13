class ProductManager{

    products= [];

addProduct(tittle,description,price,thumbnail,code,stock) {
    
    const producto = {
        
        tittle,
        description,
        price ,
        thumbnail,
        code,
        stock

    }
    this.products.push(producto);
    console.log(`producto agregado`)
};

getProducts(){
    console.log(this.products);
}

}

// ejemplos de uso

const productManager = new ProductManager();

productManager.addProduct("manzana","roja",100,"" ,1,10);
productManager.getProducts();