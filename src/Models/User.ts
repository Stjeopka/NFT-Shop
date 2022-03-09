export interface User {
    UserName:string;
    avatarSrc:string;
}

export interface NftItem{
    id:number;
    value:number,
    description:string;
    src?:string;
}