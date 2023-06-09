enum isDeleted {
    false = 0,
    true = 1,
}

export interface Inspection {
    id: number,
    certificate: string, 
    expirationDate: Date,
    isDeleted: isDeleted, 
    createdAt: Date,
    updatedAt: Date, 
    CarId: number,
    UserId: number,
}