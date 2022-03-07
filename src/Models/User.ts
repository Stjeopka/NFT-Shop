export interface User{
    UserName:string;
    avatarSrc:string;
    cart:NftItem[];
}

export interface NftItem{
    id:number;
    value:number,
    description:string;
    src?:string;
}