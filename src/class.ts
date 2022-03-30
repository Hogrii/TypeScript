/*
javascript 원본
class Cart {
    constructor(user){
        this.user = user;
        this.store = {};
    }
    put(id, product){
        this.store[id] = product;
    }
    get(id){
        return this.store[id];
    }
}
const cartJohn = new Cart({name: 'john'});
const cartJay = new Cart({name: 'jay'});
*/

interface User{
    name: String;
}
interface Product{
    id: String;
    price: number;
}
class Cart {
    // default는 public이다.
    // protected는 클래스 내에서만 접근 가능하지만 상속받을 경우 접근 가능하다.
    // protected user: User;

    // private 접근제한자를 이용해 접근을 제한시킨다.
    private store: object;

    // 매개변수에서도 접근제한자를 사용할 수 있다. -> 접근제한자를 지울 경우 line29 주석을 해제해야 한다.
    constructor(public user: User){
        this.user = user;
        this.store = {};
    }
    public put(id: string, product: Product){
        this.store[id] = product;
    }
    private get(id){
        return this.store[id];
    }
}
// Cart로 부터 상속받은 PromotionCart
class PromotionCart extends Cart{
    addPromotion(){
        this.user;
    }
}
const cart2 = new PromotionCart({name: 'john'});
const cartJohn = new Cart({name: 'john'});
const cartJay = new Cart({name: 'jay'});

