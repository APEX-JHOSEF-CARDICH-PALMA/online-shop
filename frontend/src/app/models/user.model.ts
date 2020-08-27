export interface User{
            error:string;
            data:UserInfo[];
}
export interface UserInfo{
    id:string;
    name:string;
    surname:string;
    email:string;
    password:string;
    role:string;
    USERcol:string;
    SHOP_id:string;
}

