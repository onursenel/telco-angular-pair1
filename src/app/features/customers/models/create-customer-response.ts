export interface CreateCustomerResponse{
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    motherName:string;
    fatherName:string;
    nationalId:string;
    birthDate:Date | null;  //date kısmı string ile değişebilir!
    
}