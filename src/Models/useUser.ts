import {useEffect, useState} from "react";
import {User} from "./User";


export const useUser = (callback?: () => void): [(User | null), ((userName: string) => void), ((action: "addCart" | "removeCart", value: any) => void)] => {
    const [user, setUser] = useState<User | null>(null);
    const loginUser = (userName: string) => {
        console.log("userName", userName);
        if (userName) {
            setUser({
                UserName: userName,
                avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5spYMNieWX-f77dDLGoPujAm2Ra7xcjypXw&usqp=CAU",
                cart: [],
            });
        } else if (userName == "") {
            setUser(null);
        }
        if (callback)
            callback();
    }
    const dispatch = (action: string, value: any) => {
        if (!user)
            return;

        if (action == "addCart") {
            user.cart = [...user.cart, value]
        } else if (action == "removeCart") {
            user.cart = user.cart.filter(i => i.id != value?.id)
        }
        if (callback)
            callback();
    }

    return [user, loginUser, dispatch];
}