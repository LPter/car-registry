export interface Inspection {
    id: number,
    certificate: string, 
    expirationDate: Date,
    isDeleted: boolean, 
    createdAt: Date,
    updatedAt: Date, 
    CarId: number,
    UserId: number,
}