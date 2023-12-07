import typeCart from './typeCart';

export default class Cart {
    private _items: typeCart[] = [];

    add(item: typeCart): void {
        this._items.push(item);
    }

    get items(): typeCart[] {
        return [...this._items];
    }

    totalSum(): typeCart {
        let allPrice = null;

        this._items.forEach((element) => {
            allPrice += element.price
        });

        return allPrice;
    }

    saleSum(sale) {
        let allPriceSale = null;

        this._items.forEach((element) => {
            const sumSale = element.price * sale / 100
            allPriceSale += sumSale
        });

        return allPriceSale;
    }

    deleteObject() {
        this._items.filter(element => !('id' in element));
    }
}
