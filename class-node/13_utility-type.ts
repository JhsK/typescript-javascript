interface Produce {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

function fetchProducts(): Promise<Produce[]> {

}

function displayProductDetail(shoppingItem: { id: number; name: string; price: number}) {

}


type shoppingItem = Pick<Produce, 'id' | 'name' | 'price'>;
function displayProductDetail2(shoppingItem: Pick<Produce, 'id' | 'name' | 'price'>) {

}