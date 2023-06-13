export interface Car {
    id: number,
    number: string,
    registryCity: string,
    automaker: string, 
    model: string, 
    engineType: string, 
    fuelType: string, 
    purpose: string,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date,
}