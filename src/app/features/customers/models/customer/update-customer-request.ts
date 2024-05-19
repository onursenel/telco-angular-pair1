export interface UpdateCustomerRequest{
    id?: string;
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    motherName:string;
    fatherName:string;
    nationalityId:string;
    birthDate:Date | null; 
    
}