export interface User {
    UserName:string;
    avatarSrc:string;
    cart:NftItem[];
}

export interface NftItem{
    id:number;
    value:number,
    description?:string;
    src:string;
}
const abc  = "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"

export const allItems: NftItem[] = [
    {
    id : 1,
    value: 30,
    src: abc
},
{
    id : 2,
    value: 50,
    src: abc
},
{
    id : 3,
    value: 52,
    src: abc
},
{
    id : 4,
    value: 25,
    src: abc
},
{
    id : 5,
    value: 36,
    src: abc
},
{
    id : 6,
    value: 27,
    src: abc
},
];
