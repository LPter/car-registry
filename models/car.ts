enum isDeleted {
    false = 0,
    true = 1,
}

export interface Car {
    id: number,
    number: string,
    registryCity: string,
    automaker: string, 
    model: string, 
    engineType: string, 
    fuelType: string, 
    purpose: string,
    isDeleted: isDeleted,
    createdAt: Date,
    updatedAt: Date,
}