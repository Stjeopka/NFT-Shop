import {User, NftItem} from "./User";
import {atom, selector} from "recoil";

export const userAtom = atom<User | null>({
    key: "user-state",
    default: null,
})
export const shoppingCartAtom = atom<NftItem[]>({
    key: "shoppingCartAtom",
    default: [],
})
export const userBalanceSelector = selector({
    key: "userBalanceSelector",
    get: ({get}) => {
        const cart = get(shoppingCartAtom);
        if (!cart) return "-";
        let sum = 0.0;
        cart.forEach(i => sum += i.value);
        return sum;
    }
})
