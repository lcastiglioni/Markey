const products = [
  {
    id: "1",
    name: "Quarsar RGB",
    price: "7000",
    img: "https://i.ibb.co/yS29sPB/quarsar.png",
    stock: 5,
    descrition: "Teclado RGB Gamer",
    category: "keyboards",
  },

  {
    id: "2",
    name: "Razer Phantom",
    price: "14000",
    img: "https://m.media-amazon.com/images/I/51kxBQPO9CL._AC_UY218_.jpg",
    stock: 5,
    descrition: "Teclado RGB Gamer 2",
    category: "keycaps",
  },

  {
    id: "3",
    name: "Switch kit keyboard",
    price: "20000",
    img: "https://m.media-amazon.com/images/I/61CydMzagbL._AC_SX679_.jpg",
    stock: 5,
    descrition: "Teclado RGB Gamer 3",
    category: "accesories",
  },
];




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 400);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    });
};

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId));
    }, 600);
});
};

