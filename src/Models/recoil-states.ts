import {User} from "./User";
import {atom, selector} from "recoil";

export const userAtom = atom<User | null>({
    key: "user-state",
    default: null,
})

export const userBalanceSelector = selector({
    key: "userBalanceSelector",
    get: ({get}) => {
        const user = get(userAtom);
        if (!user) return "-";
        let sum = 0.0;
        user.cart.forEach(i => sum += i.value);
        return sum;
    }
})
