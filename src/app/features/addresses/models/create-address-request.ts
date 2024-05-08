export interface CreateAddressRequest{
    cityId:number;
    street : string;
    houseNumber:string;
    description:string;
}


interface City{
    id:number;
    name:string;
}