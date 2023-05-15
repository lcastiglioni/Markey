const products = [
    {
        id: '1',
        name: 'Quarsar RGB',
        price: '7000',
        img: 'https://lh3.googleusercontent.com/IoyWTL8rqIefHbWNIQ1rz2QyMs57b-_k0brCPHqP6hYjtwYE3wmiQdWUL8LPkUFApjviMsE7Esv6A6PbGS9gNUWInLk_tMujNvqYIEW3',
        stock: 5,
        descrition: 'Teclado RGB Gamer'
    },
    {id: 2, name: 'Alnitak', price: '14000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdTkcChKhy_C21BAZgQ33g6j9VnEkaSJLkSRE7JCS7SdEuwJ83vHyWgMwDomKk2f7B68&usqp=CAU', stock: 5, descrition: 'Teclado RGB Gamer 2'},
    {id: 3, name: 'Mintaka', price: '20000', img: 'https://www.irrompibles.net/irrwp/wp-content/uploads/2020/12/Minatka1.jpg', stock: 5, descrition: 'Teclado RGB Gamer 3'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}